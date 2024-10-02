// backend/routes/reviews.js
const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

// Create a Review
router.post('/', async (req, res) => {
  const { userId, bookId, content, rating } = req.body;
  const newReview = await Review.create({ userId, bookId, content, rating });
  res.status(201).json(newReview);
});

// Get Reviews for a Book
router.get('/:bookId', async (req, res) => {
  const reviews = await Review.findAll({
    where: { bookId: req.params.bookId },
    include: { model: User, attributes: ['name'] }
  });
  res.json(reviews);
});

module.exports = router;
