const express = require('express');
const cors = require('cors');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

// Serve front-end and documentation
app.use('/', express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes
app.use('/products', productRoutes);

// Export for server.js AND for your tests
module.exports = app;