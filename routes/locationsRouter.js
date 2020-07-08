const express = require('express');
const router = express.Router();
const locations = require('../models/locations');
const mongoose = require('mongoose');
const locationsController = require('../controllers/locationsController');

router.get('/locations', locationsController.getLocations);
router.get('/locations/:id', locationsController.getLocationsById);
router.post('/locations', locationsController.createLocations);
router.put('/locations/:id', locationsController.updateLocations);


module.exports = router;