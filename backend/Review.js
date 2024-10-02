// backend/models/Review.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Book = require('./Book');

const Review = sequelize.define('Review', {
  content: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
});

// Define relationships
Review.belongsTo(User);
Review.belongsTo(Book);

module.exports = Review;
