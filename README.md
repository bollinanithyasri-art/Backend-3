# Backend Lab 3 – Book Management REST API

## 1. Project Overview

This project is developed as part of Backend Lab 3. It is a Book Management REST API built using Node.js, Express.js, and SQLite.

The application allows users to perform CRUD operations (Create, Read, Update, and Delete) on book records through REST API endpoints.

## 2. Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend web application framework.
- **SQLite** – Lightweight relational database.
- **Postman** – API testing tool.
- **Visual Studio Code** – Code editor.

## 3. Project Structure

```text
Backend 3/
│
├── node_modules/
├── postman/
├── books.db
├── database.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## 4. Features

- Add new book details.
- Retrieve all available books.
- Update existing book information.
- Delete books using their ID.
- Store book records in an SQLite database.
- Handle API requests and responses using Express.js.
- Validate input data and handle errors.

## 5. CRUD Operations

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create a book | POST | `/books` |
| Get all books | GET | `/books` |
| Update a book | PUT | `/books/:id` |
| Delete a book | DELETE | `/books/:id` |

## 6. Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/bollinanithyasri-art/Backend-3.git
```

### Step 2: Open the Project Folder

```bash
cd Backend-3
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Server

```bash
node server.js
```

The server runs on:

```text
http://localhost:3000
```

## 7. API Testing Using Postman

### POST – Add a New Book

**URL:** `http://localhost:3000/books`

**Method:** POST

**Request Body:**

```json
{
  "title": "Java Programming",
  "author": "John",
  "price": 500
}
```

### GET – Retrieve All Books

**URL:** `http://localhost:3000/books`

**Method:** GET

This endpoint retrieves all available book records from the database.

### PUT – Update Book Details

**URL:** `http://localhost:3000/books/1`

**Method:** PUT

**Request Body:**

```json
{
  "title": "Java Programming",
  "author": "John",
  "price": 600
}
```

### DELETE – Delete a Book

**URL:** `http://localhost:3000/books/1`

**Method:** DELETE

This endpoint deletes the book with the specified ID.

## 8. Database

SQLite is used to store book information.

The books table contains the following fields:

| Column | Description |
|---|---|
| id | Unique ID of the book |
| title | Name of the book |
| author | Name of the author |
| price | Price of the book |

## 9. HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | OK – Request successful |
| 201 | Created – Book added successfully |
| 400 | Bad Request – Invalid input |
| 404 | Not Found – Book does not exist |
| 500 | Internal Server Error |

## 10. Conclusion

This project demonstrates the development of a REST API using Node.js and Express.js with SQLite database integration. It provides practical knowledge of CRUD operations, HTTP methods, database connectivity, request handling, and API testing using Postman.

Through this laboratory exercise, the implementation and testing of backend web application fundamentals were successfully completed.

## 11. GitHub Repository

Project Repository:

https://github.com/bollinanithyasri-art/Backend-3
