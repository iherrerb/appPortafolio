// backend/models/reservasModel.js

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    email: { type: String, required: true },
    service: { type: String, required: true },
    professional: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);