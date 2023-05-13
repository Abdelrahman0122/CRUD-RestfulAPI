import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'



const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!name || !age ||   !gender){
      console.log('Fill the Values')
    }else{
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);}

  const data = {
  name: name,
  email: email,
  gender: gender,
  age: age
};

console.log(data);
 

    axios.post('http://127.0.0.1:5000/persons', data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  }; 

  return (
    <>
      <div className="container w-75 mx-auto py-4">
        <div className="row">
          <div className="card w-100 py-4">
            <form onSubmit={handleSubmit}>
              <p>Name:</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
              />
                   <p>Email:</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>age:</p>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <p>Gender:</p>
              <input type="text" onChange={(e) => setGender(e.target.value)} />

              <button type="submit" className="btn btn-success w-100 mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Form;
