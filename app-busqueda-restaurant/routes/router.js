const express = require('express');
const { Consultar, registrar, ConsultarPorRestaurant } = require('../controllers/restaurant');
const router = express.Router();


router.get('/', Consultar);
router.post('/registrar-restaurant', registrar);
router.post('/consultar-restaurant', ConsultarPorRestaurant);


module.exports = router;