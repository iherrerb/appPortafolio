// backend/models/usuarioModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: String, default: 'cliente' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);