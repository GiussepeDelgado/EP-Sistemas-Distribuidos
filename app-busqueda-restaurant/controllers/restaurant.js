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

const ConsultarPorRestaurant = async (req, res) => {
    try {
        const {name, location}= req.body;
        console.log("name:",name)
        console.log("location:",location)
        const restaurant = ""
        if (name=='') {
            restaurant = await Restaurant.findOne({location :location });
        }else if (location == ''){
            restaurant = await Restaurant.findOne({name :name });
        }else{
            restaurant = await Restaurant.findOne({name :name ,location :location });
        }
        res.status(200).json(restaurant);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};





module.exports = {registrar,Consultar,ConsultarPorRestaurant};
