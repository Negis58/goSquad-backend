const express = require('express');
const router = express.Router();
const platform = require('../models/platform');
const mongoose = require('mongoose');
const platformController = require('../controllers/platformController');

router.get('/platform', platformController.getPlatform);
router.get('/platform/:id', platformController.getPlatformById);
router.post('/platform', platformController.createPlatform);
router.put('/platform/:id', platformController.updatePlatform);


module.exports = router;