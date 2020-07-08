const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const userController = require('../controllers/usersController');
const {check} = require('express-validator');

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUserByID);
router.delete("/user/:id", userController.removeUser);
router.post('/register', [check('email').isEmail(), check('password').isLength({min:8, max:256}),
    check('nickname').notEmpty()], userController.createUser);
router.post('/authenticate', [check('email').isEmail(), check('password').isLength({min:8, max:256}),
    check('nickname').notEmpty()], userController.authenticate);
router.put('/user/:id', userController.updateUser);

module.exports = router;