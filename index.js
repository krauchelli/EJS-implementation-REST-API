const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const methodOverride = require('method-override');
const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./routes');

const app = express();

// koneksi ke mongodb
mongoose.connect('mongodb://127.0.0.1/codepolitanshop_db')
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

// middleware bantuan untuk payload
app.use(express.json()); // jika mengirimkan data dalam bentuk json
app.use(express.urlencoded({ extended: true })); // jika mengirimkan data dalam bentuk form
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routing time
app.use(router);

// listener
app.listen(3000, () => {
  console.log('server shop is running on http://127.0.0.01:3000');
});
