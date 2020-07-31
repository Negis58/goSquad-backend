const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userInfoController = require('../controllers/usersInfoController');
const {check} = require('express-validator');
const validateTokens = require('../middleware/validateToken');

router.get('/userInfo', userInfoController.getUsersInfo);
router.get('/userInfo/:nickname', userInfoController.getUserInfoByNickname);
router.delete("/:id", userInfoController.removeUser);
router.post('/userInfo', userInfoController.createUserInfo);
router.patch('/userInfo/:nickname', userInfoController.updateUserInfos);


module.exports = router;
