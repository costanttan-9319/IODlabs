const express = require('express');
const cors = require('cors');
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(cors());
app.use(express.json());

// Connect the calculator routes
app.use('/calculator', calculatorRoutes);

// Export the app for testing
module.exports = app;