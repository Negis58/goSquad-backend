const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userInfoController = require('../controllers/usersInfoController');
const {check} = require('express-validator');
const validateTokens = require('../middleware/validateToken');

router.get('/userInfo', validateTokens.validateToken, userInfoController.getUsersInfo);
router.get('/userInfo/:nickname', validateTokens.validateToken, userInfoController.getUserInfoByNickname);
router.delete("/:id", validateTokens.validateToken, userInfoController.removeUser);
router.post('/userInfo', validateTokens.validateToken, userInfoController.createUserInfo);
router.put('/userInfo/:nickname', validateTokens.validateToken, userInfoController.updateUserInfo);


module.exports = router;
