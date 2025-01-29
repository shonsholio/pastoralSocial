const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.main)
router.get('/nuevoServidor', mainController.nuevoServidor)



module.exports = router 