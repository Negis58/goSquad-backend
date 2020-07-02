const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const config = require('config');
const userInfo = require('../models/userInfo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');

class usersInfoController {

    getUsersInfo(req,res) {
        userInfo.find(function (err,user,next) {
            if (err) return next(err);
        }).populate('user').exec((err, user) => {
            res.json(user);
        });
    }

    getUserInfoByID(res,req,next) {
        userInfo.findById(req.params.id, function (err,user) {
            if (err) return next(err);
            res.json(user);
        });
    }
    createUserInfo(req,res,next) {
            const user = new userInfo({
                nickName: req.body.nickName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                dateOfBirth: req.body.dateOfBirth,
                voiceChat: req.body.voiceChat,
                country: req.body.country
            });
            user.save();
    }


    removeUser(req,res,next) {
        const id = req.params.id;
        userInfo.remove({_id:id}).then(result=>{
            res.status(200).json(result);
        });
    }
}

module.exports = new usersInfoController();