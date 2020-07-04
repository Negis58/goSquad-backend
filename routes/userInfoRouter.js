const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userInfoController = require('../controllers/usersInfoController');
const {check} = require('express-validator');

router.get('/userInfo', userInfoController.getUsersInfo);
router.get('/userInfo/:id', userInfoController.getUserInfoByID);
router.delete("/:id", userInfoController.removeUser);
router.post('/userInfo', userInfoController.createUserInfo);


module.exports = router;
