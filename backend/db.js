// backend/config/db.js
const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('book_review', 'root', 'shreya', { // Change to your MySQL credentials
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
