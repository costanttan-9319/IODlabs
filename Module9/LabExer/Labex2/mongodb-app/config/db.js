// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Ensure you have MONGO_URI defined in your .env file
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/module9_lab');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;