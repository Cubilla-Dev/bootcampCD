const express = require('express')
const router = express.Router()

const pirataController = require('../controllers/pirata.controller')

router.delete('/delete/:id', pirataController.deletePirata);
router.post('/pirate/new', pirataController.createPirata);

router.get('/pirate/:id', pirataController.onePirata);
router.get('/pirates', pirataController.allPirata);

module.exports = router;