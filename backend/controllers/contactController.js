const Contact = require('../models/contactModel');

// Guardar mensaje de contacto en la base de datos
const saveContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Message received!' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to save message' });
    }
};

module.exports = { saveContactMessage };
