// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./backend/config/db.js'); // Importa la función de conexión
const contactRoutes = require('./backend/routes/contactRoutes.js');
const reservationRoutes = require('./backend/routes/reservationRoutes');
const userRoutes = require('./backend/routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta "frontend"
app.use(express.static(path.join(__dirname, './frontend'))); // Asegúrate de que la ruta sea correcta

app.use(bodyParser.json());

// Middleware--Rutas
app.use('/contact', contactRoutes);
app.use('/reservations', reservationRoutes);
app.use('/users', userRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
