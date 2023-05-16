// Archivo: Reservation.js
const mongoose = require('mongoose');

// Definir el esquema para el modelo Reservation
const reservationSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

// Crear el modelo Reservation a partir del esquema
const Reservation = mongoose.model('Reservation', reservationSchema);

// Exportar el modelo Reservation
module.exports = Reservation;