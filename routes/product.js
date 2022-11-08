require('dotenv').config();
var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const Product = require("../models/Product");

/* GET home page. */
router.get('/', async function (req, res, next) {
  await mongoose.connect(process.env["MONGO.URI"] + "/" + process.env["MONGO.DB"]);

  try {
    const products = await Product.find();
    res.json(products);
  }
  catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
  finally {
    await mongoose.disconnect();
  }
});

router.post('/', async function (req, res, next) {
  await mongoose.connect(process.env["MONGO.URI"] + "/" + process.env["MONGO.DB"]);

  try {
    let product = new Product(req.body);
    product = await product.save();
    res.json(product);
  }
  catch (err) {
    console.log(err);
    res.json({ message: err.message });
  }
  finally {
    await mongoose.disconnect();
  }
});

module.exports = router;
