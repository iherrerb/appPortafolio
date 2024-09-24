// backend/models/reservasModel.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
    servicio_id: { type: mongoose.Schema.Types.ObjectId, ref: 'servicios', required: true },
    fecha_reserva: { type: Date, required: true },
    estado: { type: String, default: 'pendiente' },
    notas: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);