// backend/controllers/reservationController.js
const Reservation = require('../models/reservasModel');

exports.createReservation = async (req, res) => {
    try {
        const newReservation = await Reservation.create(req.body);
        res.status(201).json({ message: 'Reserva creada.', data: newReservation });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUserReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ usuario_id: req.params.userId });
        res.status(200).json({ data: reservations });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
