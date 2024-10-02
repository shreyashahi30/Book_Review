const db = require('../models/db');

exports.getAllBooks = (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getBookById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
};

exports.addBook = (req, res) => {
    const newBook = req.body;
    db.query('INSERT INTO books SET ?', newBook, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, ...newBook });
    });
};
