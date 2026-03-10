const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3888;

app.use(cors());

// 1. Import your math logic
const calculatorRoutes = require('./routes/calculatorRoutes');

/**
 * PINPOINTING THE FILE
 * This explicitly sends index.html when you hit http://localhost:3888
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * THE "MASTER KEY"
 * We still need this so the HTML can "see" script.js and any CSS 
 * inside the public folder.
 */
app.use(express.static(path.join(__dirname, 'public')));

// 2. Connect the calculator routes
app.use('/calculator', calculatorRoutes);

// 3. Start the engine
app.listen(port, () => {
    console.log(`-----------------------------------------`);
    console.log(`✅ BACK-END IS ONLINE`);
    console.log(`📡 URL: http://localhost:${port}`);
    console.log(`-----------------------------------------`);
});