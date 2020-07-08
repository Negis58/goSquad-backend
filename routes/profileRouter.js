const express = require('express');
const router = express.Router();
const profile = require('../models/profile');
const mongoose = require('mongoose');
const profileController = require('../controllers/profileController');

router.get('/profile', profileController.getProfile);
router.get('/profile/:id', profileController.getProfileById);
router.post('/profile', profileController.createProfile);
router.put('/profile/:id', profileController.updateProfile);




module.exports = router;