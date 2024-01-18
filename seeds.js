const mongoose = require('mongoose');
const { Product } = require('./models/product');

mongoose.connect('mongodb://127.0.0.1/codepolitanshop_db')
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

// data sample pertama yang ingin dimasukkan
const seedProducts = [
  {
    name: 'Kemeja Flanel',
    brand: 'Hollister',
    price: 750000,
    color: 'biru muda',
    category: 'Baju',
  },
  {
    name: 'Celana Chino',
    brand: "Levi's",
    price: 900000,
    color: 'krem',
    category: 'Celana',
  },
  {
    name: 'Sweater',
    brand: 'Gap',
    price: 650000,
    color: 'merah muda',
    category: 'Baju',
  },
  {
    name: 'Baju Renang',
    brand: 'Speedo',
    price: 500000,
    color: 'biru tua',
    category: 'Baju',
  },
  {
    name: 'Rompi',
    brand: 'Zara',
    price: 850000,
    color: 'abu-abu',
    category: 'Baju',
  },
  {
    name: 'Jas',
    brand: 'Hugo Boss',
    price: 4500000,
    color: 'hitam',
    category: 'Baju',
  },

];

Product.insertMany(seedProducts).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
