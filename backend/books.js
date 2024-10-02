// backend/routes/books.js
const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Get Books with Pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const books = await Book.findAll({ offset, limit });
  const totalBooks = await Book.count();
  res.json({
    books,
    currentPage: page,
    totalPages: Math.ceil(totalBooks / limit),
  });
});

// Create a Book
router.post('/', async (req, res) => {
  const { title, author } = req.body;
  const newBook = await Book.create({ title, author });
  res.status(201).json(newBook);
});

module.exports = router;
