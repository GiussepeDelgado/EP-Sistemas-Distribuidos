const express = require('express');
const { registrarRestaurant, registrarReservations, consultarRestaurants, consultarPorRestaurants, } = require('../controllers/general');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index');
  });

router.get('/restaurants', consultarRestaurants);
router.post('/consultar-restaurant', consultarPorRestaurants);
router.post('/registrar-restaurant', registrarRestaurant);
router.post('/registrar-reservation', registrarReservations);

module.exports = router;