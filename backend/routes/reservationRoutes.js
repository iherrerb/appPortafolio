// backend/routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const {createReservation}  = require('../controllers/reservationController');

router.post('/', createReservation);  // Crear una reserva
//router.get('/:email', getUserReservations);  // Obtener reservas de un usuario

module.exports = router;
