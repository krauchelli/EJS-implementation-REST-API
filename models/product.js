const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL'],
    required: true,
  },
});

const Product = new mongoose.model('Product', productSchema);

module.exports = { Product };
