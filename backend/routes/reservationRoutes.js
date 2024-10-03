// backend/routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const {createReservation}  = require('../controllers/reservationController');
const {getUserReservations}  = require('../controllers/reservationController');

router.post('/', createReservation);  // Crear una reserva
//router.get('/:email', getUserReservations);  // Obtener reservas de un usuario
router.get('/:email',getUserReservations);
module.exports = router;
