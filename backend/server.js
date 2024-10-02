// backend/server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db'); // Import the Sequelize instance
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);

// Sync Database and Start Server
sequelize.sync()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error connecting to the database:', err));
