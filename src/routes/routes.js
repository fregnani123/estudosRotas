const express = require('express')
const router = express.Router();
const homeController = require('../controllers/HomeController')

router.get('/teste', homeController.paginaTeste);

module.exports = router;