// backend/config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book_review', 'root', 'shreya', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
