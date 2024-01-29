const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String, unique: true },
    phone: { type: String },
    password: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;