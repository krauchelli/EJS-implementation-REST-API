const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('./models/product');

const router = express.Router();

module.exports = { router };

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index', { products });
});
router.get('/products/create', (req, res) => {
  res.render('products/create');
});

// get specific product
// pastikan posisi routing ini di paling bawah supaya routing lain tidak dianggap sebagai query parameter
router.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/show', { product });
});
