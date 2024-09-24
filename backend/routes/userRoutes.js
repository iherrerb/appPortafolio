// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

router.post('/', createUser);  // Crear un nuevo usuario

module.exports = router;
