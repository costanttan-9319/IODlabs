const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    emailId: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true }
}, { 
    timestamps: true // This automatically creates and manages createdAt and updatedAt
});

module.exports = mongoose.model("user", userSchema);