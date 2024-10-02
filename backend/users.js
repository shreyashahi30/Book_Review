// backend/routes/users.js
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });
  res.status(201).json(newUser);
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  res.status(200).json(user);
});

// Update User Profile
router.put('/profile', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.update({ name, email }, { where: { id: req.user.id }, returning: true });
  res.status(200).json(user[1][0]);
});

module.exports = router;
