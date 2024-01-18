const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('./models/product');

const router = express.Router();

module.exports = { router };

router.get('/', (req, res) => {
  res.send('Hello world!');
});
