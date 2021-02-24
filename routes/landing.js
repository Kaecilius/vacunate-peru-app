const express = require('express');
const landingController = require('../controller/landing');

const api = express.Router();

api.get('/prueba', landingController.pruebas );

//principal
api.get('/', landingController.home );
api.get('/demo', landingController.demo );
api.get('/equipo', landingController.equipo );

module.exports = api;