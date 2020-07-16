const express = require('express');
const router = express.Router();
const gameIconController = require('../controllers/gameIconController');

router.get('/gameIcon', gameIconController.getGameIcon);
router.get('/gameIcon/:id', gameIconController.getGameIconById);
router.post('/gameIcon', gameIconController.createGameIcon);
router.put('/gameIcon/:id', gameIconController.updateGameIcon);


module.exports = router;