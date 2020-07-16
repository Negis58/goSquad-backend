const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/game', gameController.getGame);
router.get('/game/:id', gameController.getGameById);
router.post('/game', gameController.createGame);
router.put('/game/:id', gameController.updateGame);


module.exports = router;