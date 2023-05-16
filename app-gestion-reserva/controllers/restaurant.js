const Restaurant = require('../models/restaurant');


const registrar = async (req, res) => {
    const newRestaurant = new Restaurant(req.body);
    try {
      const restaurantCreado = await newRestaurant.save();
      res.status(201).json("Se agregó existosamente el restaurant :"+restaurantCreado.name);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

// Endpoint para buscar restaurantes por nombre o ubicación
const Consultar = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({});
        res.status(200).json(restaurant);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};




module.exports = {registrar,Consultar};
