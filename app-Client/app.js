//Metodos para configuraciones
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
// Configurar CORS
app.use(cors());
//funciones de desarrollo
const port = process.env.PORT || 5000;
require('dotenv').config({ path: './env/.env' });
app.set('view engine', 'ejs');
app.use(express.static('public'));
//app.use(formidableMiddleware());

//para procesar datos enviados desde forms
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
console.log(process.env.PORT);
app.use('/', require('./routes/router'));

app.listen(port, () => {
  console.log('SERVER UP runnung in http://localhost:'+port)
});
