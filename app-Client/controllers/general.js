
const axios = require('axios');

const consultarRestaurants = async (req, res) => {

  axios.get('http://localhost:5001/')
  .then(response => {
    console.log(response.data);

    res.render('listRestaurant',{restaurants:response.data});
  })
  .catch(error => {
    console.error('Error al hacer la solicitud', error);
    res.status(500).json({ message: error.message });
    
  });
};

const consultarPorRestaurants = async (req, res) => {

  axios.get('http://localhost:5001/consultar-restaurant')
  .then(response => {
    console.log(response.data);
    res.status(200).json(response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud', error);
    res.status(500).json({ message: error.message });
    
  });
};

const registrarRestaurant = async (req, res) => {

  axios.post('http://localhost:5001/registrar-restaurant', req.body)
  .then(response => {
    console.log(response.data);
    res.status(201).json(response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud', error);
    res.status(400).json({ message: error.message });
  })
};
const registrarReservations = async (req, res) => {

  axios.post('http://localhost:5002/registrar-reservation', req.body)
  .then(response => {
    console.log(response.data);
    res.status(201).json(response.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud', error);
    res.status(400).json({ message: error.message });
  });
};



module.exports = { consultarRestaurants,registrarReservations ,registrarRestaurant,consultarPorRestaurants};
