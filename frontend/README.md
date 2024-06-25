
# BookStore Application

## Project Overview
BookStore is a web application that allows users to create, read, update, and delete books. It provides a user-friendly interface for managing a collection of books.

## Technologies Used
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, React Router, Vite, TailwindCSS
- **Others**: Axios, Notistack

## Installation Instructions

### Backend Setup
Prerequisites for Backend Setup
To set up and run the backend of your BookStore application, you need to ensure the following prerequisites are met:

Software Requirements
Node.js (v16 or higher): Node.js is the runtime environment for running JavaScript on the server-side.
npm (Node Package Manager): npm is included with Node.js and is used to manage the project's dependencies.
MongoDB: MongoDB is a NoSQL database used to store the book data.
Git (optional, for cloning the repository): Git is used for version control and cloning the repository from a remote source.

Installation Instructions:
in Git Bash
mkdir repo_name (creates a local repository)
cd repo_name


*In VSC terminal

backend init
Enter name of project-backend
Enter Port
Enter Mongo uri 
cd backend
Run npm i
Change mongo uri to your uri in .env file
Run:  npm run dev

Here are the detailed steps to set up the frontend of your BookStore application:
Prerequisites:
Ensure you have the following installed on your system:

Node.js (v16 or higher)
npm (Node package manager, which comes with Node.js)
Git (optional, if you're cloning from a repository)

Frontend Setup Instructions:
Create React in Vite

*In VSC terminal
-npm create vite@latest
-name project frontend
-select framework react
-select javascript
-cd into frontend
-npm install
-npm run dev
-ctrl & click into local host


Usage Instructions:

Ensure the backend server is running on the default port 5555.
Open another terminal and ensure the frontend development server is running.
Open your browser and navigate to http://localhost:5173 to view the application.


API Endpoints:
Books
GET /books - Retrieve all books
GET /books/:id - Retrieve a single book by ID
POST /books - Create a new book
PUT /books/:id - Update a book by ID
DELETE /books/:id - Delete a book by ID

Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
