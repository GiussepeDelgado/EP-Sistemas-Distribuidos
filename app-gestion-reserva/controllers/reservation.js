const Reservation = require('../models/reservation');
const Restaurant = require('../models/restaurant');


const registrar = async (req, res) => {
    const {restaurantId}= req.body
    const restaurant = await Restaurant.findOne({_id:restaurantId});
    console.log(restaurant)
    if (restaurant.tables > 0) {
        const {restaurantId}= req.body
        const newReservation = new Reservation(req.body);
        try {
            const reservationCreado = await newReservation.save();
            const restaurantUpdate = await Restaurant.findOneAndUpdate(
                { _id: restaurantId }, 
                { $inc: { tables: -1 } }, 
                { new: true } 
              );

              res.status(201).json("Se agregó existosamente la reservation a nombre de "+newReservation.userName)
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else{
        res.status(400).json("No hay mesas disponibles");
    }

};

module.exports = {registrar};
