const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = { router };

router.get('/', (req, res) => {
  res.send('Hello world!');
});
