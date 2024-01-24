const express = require('express')
const router = express.Router()

const jokeController = require('../controllers/jokes.controller')

router.put('/update/:id', jokeController.updateJokes);
router.delete('/delete/:id', jokeController.deleteJokes);
router.post('/create', jokeController.createJokes);

router.get('/onejoke/:id', jokeController.oneJokes);
router.get('/alljoke', jokeController.allJokes);

module.exports = router;