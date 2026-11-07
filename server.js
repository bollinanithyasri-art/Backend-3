
const express = require('express');
const db = require('./database');

const app = express();

app.use(express.json());

// HOME ROUTE
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Lab 3 REST API is running'
    });
});

// GET - Retrieve all books
app.get('/books', (req, res) => {
    db.all('SELECT * FROM books', [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving books'
            });
        }

        res.status(200).json({
            message: 'Books retrieved successfully',
            books: rows
        });
    });
});

// POST - Add a new book
app.post('/books', (req, res) => {
    const { title, author, price } = req.body;

    if (
        typeof title !== 'string' ||
        title.trim() === '' ||
        typeof author !== 'string' ||
        author.trim() === '' ||
        price === undefined ||
        price === null ||
        price === '' ||
        !Number.isFinite(Number(price))
    ) {
        return res.status(400).json({
            message: 'Title, author and valid numeric price are required'
        });
    }

    const sql = `
        INSERT INTO books (title, author, price)
        VALUES (?, ?, ?)
    `;

    const values = [
        title.trim(),
        author.trim(),
        Number(price)
    ];

    db.run(sql, values, function (err) {
        if (err) {
            return res.status(500).json({
                message: 'Error adding book'
            });
        }

        res.status(201).json({
            message: 'Book added successfully',
            book: {
                id: this.lastID,
                title: title.trim(),
                author: author.trim(),
                price: Number(price)
            }
        });
    });
});

// PUT - Update an existing book
app.put('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const { title, author, price } = req.body;

    if (
        !Number.isInteger(id) ||
        id <= 0 ||
        typeof title !== 'string' ||
        title.trim() === '' ||
        typeof author !== 'string' ||
        author.trim() === '' ||
        price === undefined ||
        price === null ||
        price === '' ||
        !Number.isFinite(Number(price))
    ) {
        return res.status(400).json({
            message: 'Valid ID, title, author and price are required'
        });
    }

    const sql = `
        UPDATE books
        SET title = ?, author = ?, price = ?
        WHERE id = ?
    `;

    const values = [
        title.trim(),
        author.trim(),
        Number(price),
        id
    ];

    db.run(sql, values, function (err) {
        if (err) {
            return res.status(500).json({
                message: 'Error updating book'
            });
        }

        if (this.changes === 0) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        res.status(200).json({
            message: 'Book updated successfully'
        });
    });
});

// DELETE - Delete a book
app.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: 'Valid book ID is required'
        });
    }

    const sql = 'DELETE FROM books WHERE id = ?';

    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({
                message: 'Error deleting book'
            });
        }

        if (this.changes === 0) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        res.status(200).json({
            message: 'Book deleted successfully'
        });
    });
});

// START SERVER
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
