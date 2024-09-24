// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require("../models/contactModel")

//Crear Usuario
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Contacto guardado.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar contacto.', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        await Contact.find();
        res.status(201).json({ message: 'Contacto guardado.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar contacto.', error: error.message });
    }
});

module.exports = router;
