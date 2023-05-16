const mongoose = require('mongoose');

// Define el esquema del restaurante
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tables: {
    type: Number,
    required: true,
    min: 0
  }
});

// Crea el modelo de la colección de restaurantes
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Exporta el modelo
module.exports = Restaurant;