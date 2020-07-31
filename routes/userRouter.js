const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const userController = require('../controllers/userController');
const {check} = require('express-validator');
const validateTokens = require('../middleware/validateToken');
const auth = require('../controllers/authController');

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUserByID);
router.delete("/user/:id", validateTokens.validateToken, userController.removeUser);
router.post('/register', [check('email').isEmail(), check('password').isLength({min:8, max:256}),
    check('nickname').notEmpty()], userController.createUser);
router.post('/authenticate', [check('email').isEmail(), check('password').isLength({min:8, max:256}),
    check('nickname').notEmpty()], userController.authenticate);
router.patch('/user/:id', validateTokens.validateToken, userController.updateUser);
router.post('/refresh-tokens', auth.refreshTokens);

module.exports = router;