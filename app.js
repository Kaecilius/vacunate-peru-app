require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

//rutas
const landing_rutas = require('./routes/landing');

//ruta principal
app.use( express.static('public'), landing_rutas );

//Instanciar el servidor Express
app.listen( port, () => {

    console.log(`Aplicacion corriendo en el puerto:  ${ port }`);

});