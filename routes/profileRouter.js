const express = require('express');
const router = express.Router();
const profile = require('../models/profile');
const mongoose = require('mongoose');
const profileController = require('../controllers/profileController');

router.get('/profile', profileController.getProfile);
router.post('/profile', profileController.createProfile);




module.exports = router;