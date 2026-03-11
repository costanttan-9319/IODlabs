const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// This route maps "GET /products" to the getProducts function in the controller
router.get('/', productController.getProducts);

module.exports = router;