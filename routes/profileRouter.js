const express = require('express');
const router = express.Router();
const profile = require('../models/profile');
const mongoose = require('mongoose');
const profileController = require('../controllers/profileController');
const validateTokens = require('../middleware/validateToken');

router.get('/profile', validateTokens.validateToken, profileController.getProfile);
router.get('/profile/:id', validateTokens.validateToken, profileController.getProfileById);
router.post('/profile', validateTokens.validateToken, profileController.createProfile);
router.put('/profile/:id',validateTokens.validateToken, profileController.updateProfile);




module.exports = router;