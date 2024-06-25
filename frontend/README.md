Project Overview:

# BookStore Application

## Project Overview
BookStore is a web application that allows users to create, read, update, and delete books. It provides a user-friendly interface for managing a collection of books.

## Technologies Used
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: React, React Router, Vite, TailwindCSS
- **Others**: Axios, Notistack

## Installation Instructions

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>

Installation Instructions:
in Git Bash
mkdir repo_name
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

Frontend Starter Pack:
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
