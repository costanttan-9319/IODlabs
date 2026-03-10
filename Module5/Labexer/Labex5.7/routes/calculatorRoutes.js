const express = require('express');
const router = express.Router();
const calculatorController = require('../controller/controller');

router.get('/add', calculatorController.addNumbers);
router.get('/multiply', calculatorController.multiplyNumbers);
router.get('/divide', calculatorController.divideNumbers);

module.exports = router;