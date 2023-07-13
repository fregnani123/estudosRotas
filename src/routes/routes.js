const express = require('express');
const route = express.Router();
const homeController = require('../controllers/HomeController');

route.get('/oi', homeController.homeInicial );

module.exports = route