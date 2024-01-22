const express = require('express');
const mongoose = require('mongoose');
const { Product } = require('./models/product');

const router = express.Router();

module.exports = { router };

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/products', async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render('products/index', { products, category });
  }
  const products = await Product.find({});
  res.render('products/index', { products, category: 'All' });
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

// edit specific product
router.get('/products/:id/edit', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('products/edit', { product });
});

// post routing
router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect(`/products/${product.id}`);
});

router.put('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/products/${product._id}`);
});

// delete routing
router.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
});
