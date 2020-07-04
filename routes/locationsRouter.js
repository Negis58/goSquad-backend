const express = require('express');
const router = express.Router();
const locations = require('../models/locations');
const mongoose = require('mongoose');
const locationsController = require('../controllers/locationsController');

router.get('/locations', locationsController.getLocations);
router.post('/locations', locationsController.createLocations);


module.exports = router;