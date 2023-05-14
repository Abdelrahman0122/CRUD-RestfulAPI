# CRUD-RestfulAPI

This is a full-stack web application built with Node.js, Express.js, React.js, and Docker.

## Prerequisites

Before you begin, make sure you have the following installed:

- Docker: https://docs.docker.com/get-docker/

## Technologies Used

The following technologies were used to build this project:

- Node.js
- Express.js
- React.js
- Docker
- axios

## How to Run the Application in a Docker Container

To run the application in a Docker container, follow these steps:

1. Clone the repository:
 ```
 git clone  https://github.com/Abdelrahman0122/CRUD-RestfulAPI
 ``` 
2. Navigate to the project directory:

```
cd CRUD-RestfulAPI 
```
   3.Build & Run the Docker compose:
```
docker-compose up
```
4. Open a web browser and navigate to
     ``` http://localhost:3000 ```
 to access the application.
 

## Usage

This application allows you to perform CRUD operations on a list of users. You can:

- View a list of all users
- View a specific user by ID
- Create a new user
- Update an existing user
- Delete a user by ID

To use the application, follow these steps:

1. Open a web browser and navigate to `http://localhost:3000`.

2. All users appers one you add them.

3. To view a specific user, type his id in the url(recommendation use postman).

4. To create a new user, click on the "Submit" button and fill out the form.

5. To update an existing user, click on the "Edit" button next to the user's name and make changes to the form.

6. To delete a user, click on the "Delete" button next to the user's name.

## API Endpoints

The following API endpoints are available:

- `GET /Persons`: Get a list of all users.
- `GET /Persons/:id`: Get a specific user by ID.
- `POST /Persons`: Create a new user.
- `PUT /Persons/:id`: Update an existing user.
- `DELETE /Persons/:id`: Delete a user by ID.

## Contributing

Contributions are welcome! Feel free to open a pull request or file an issue.

