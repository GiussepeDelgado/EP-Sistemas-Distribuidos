const express = require('express');
const {  registrar } = require('../controllers/reservation');
const router = express.Router();

router.post('/registrar-reservation', registrar);


module.exports = router;