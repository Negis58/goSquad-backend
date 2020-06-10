const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const userController = require('../controllers/usersController');
const {check} = require('express-validator');
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserbyID);
router.post('/', [check('email').isEmail(), check('password').isLength({min:8, max:256}),
    check('nickname').notEmpty()], userController.createUser);
router.delete("/:id", userController.removeUser);

module.exports = router; 