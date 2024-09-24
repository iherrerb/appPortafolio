// backend/controllers/userController.js
const User = require('../models/usuarioModel');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ message: 'Usuario registrado.', data: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
