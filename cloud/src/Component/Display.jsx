import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // establish a WebSocket connection when the component mounts
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    // listen for updates from the server
    socket.onmessage = (event) => {
      const updatedUser = JSON.parse(event.data);

      // update the local state with the updated user data
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
    };

    // close the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, [users]);

  // fetch the data when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://127.0.0.1:5000/persons");

      // update the local state with the fetched users data
      setUsers(response.data);
    };
    fetchUsers();

    // add "users" to the dependency array to re-run the effect when the state changes
  }, [users]);

  // handle the delete button click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/persons/${id}`);

      // update the local state by removing the deleted user from the array
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // handle the update button click
  const handleUpdate = async (id) => {
    try {
      const payload = { name: updatedName };
      const response = await axios.patch(
        `http://localhost:5000/persons/${id}`,
        payload
      );
      const updatedUser = response.data;

      // update the local state with the updated user data
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );

      // reset the editing state and the updated name state
      setEditingUserId(null);
      setUpdatedName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-4">
              <div className="card-body">
                {editingUserId === user.id ? (
                  // render the edit form if the user is being edited
                  <div>
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={updatedName}
                        onChange={(event) => setUpdatedName(event.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-primary w-100 mt-2"
                      onClick={() => handleUpdate(user.id)}
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  // render the user info if the user is not being edited
                  <div>
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Gender: {user.gender}</p>
                    <p className="card-text">Age: {user.age}</p>
                    <button
                      className="btn btn-danger mr-2 w-100"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary w-100 mt-2"
                      onClick={() => {
                        setEditingUserId(user.id);
                        setUpdatedName(user.name);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;