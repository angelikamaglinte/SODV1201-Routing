// Routing Practice
// By: Marie Angelika Maglinte

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('home page');
  res.send('home page');
});

router.get('/login', (req, res) => {
  console.log('login page');
  res.send('login page');
});

router.get('/register', (req, res) => {
  console.log('register page');
  res.send('register page');
});

router.get('*', (req, res) => {
  console.log('page not found');
  res.send('page not found');
});

module.exports = router;