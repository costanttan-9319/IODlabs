const express = require('express');
const cors = require('cors');
const app = express();

//importing swagger into my app.js 

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(cors());
app.use(express.json());

//setting up for swagger for local host 3018
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect the calculator routes
app.use('/calculator', calculatorRoutes);

// Export the app for testing
module.exports = app;