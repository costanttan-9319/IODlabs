"use strict";

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// 1. Import Database Connection
const connectDB = require('./config/db');

// 2. Import Routes
// Ensure these filenames in your /routes folder match exactly (case-sensitive)
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');

const app = express();

// 3. Connect to MongoDB
connectDB();

// 4. Global Middleware
// These MUST come before your routes so the server can read the JSON body
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// 5. API Routes
// This is where you tell Express which URL path maps to which route file
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

// 6. 404 Fallback Route
// This MUST come after all your valid routes
app.use((req, res, next) => {
    res.status(404).json({ 
        result: 404, 
        error: "Endpoint not found. Please check your URL." 
    });
});

// 7. Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("Global Error Caught:", err.stack);
    res.status(500).json({ 
        result: 500, 
        error: err.message || "Internal Server Error" 
    });
});

// 8. Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});