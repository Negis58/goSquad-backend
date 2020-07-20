const User = require('../models/user');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserInfo = require('../models/userInfo');

class userController {
    getUsers(req,res) {
        let result = {};
        let status = 200;
                User.find(function (err,user) {
            if (!err) {
                result.status = status;
                result.error = err;
                result.result = user;
            } else {
                status = 500;
                result.status = status;
                result.error = err;
            }
            res.status(status).send(result);

                });
    }

    getUserByID(req,res,next) {
        User.findById(req.params.id, function (err,user) {
            if (err) return next(err);
            res.json(user);
        });
    }

    createUser(req,res,next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                nickname: req.body.nickname,
                password: req.body.password
            });
            user.save();
            const userInfo = new UserInfo({
                nickname: req.body.nickname
            });
            userInfo.save();
        }
    }

    authenticate(req,res) {
        let result = {};
        let status = 200;
            User.findOne({email: req.body.email}, function (err, user) {
                if (!err && user) {
                    bcrypt.compare(req.body.password, user.password).then(match => {
                        if (match) {
                            status = 200;
                            const payload = {id: user._id};
                            const options = {expiresIn: '48d'};
                            const token = jwt.sign(payload, config.get('jwtToken.secret'), options);
                            result.token = token;
                            result.status = status;
                            result.result = user;
                        } else {
                            status = 401;
                            result.status = status;
                            result.error = 'Authentication error';
                        }
                        res.status(status).send(result);
                    }).catch(err => {
                        status = 500;
                        result.status = status;
                        result.error = err;
                        res.status(status).send(result);
                    });
                } else {
                    status = 404;
                    result.status = status;
                    result.error = err;
                    res.status(status).send(result);
                }
            });
    }


    updateUser(req,res,next) {
        User.findById(req.params.id, function (err, user) {
            if (!user) {
                res.statusCode = 404;
                res.json({status: "Not found"});
            }
            else {
                user.email = req.body.email;
                user.nickname = req.body.nickname;
                user.password = req.body.password;
                user.save();
                res.json({status: "Ok"});
                }
        })
    }

    removeUser(req,res,next) {
        const id = req.params.id;
        User.remove({_id:id}).then(result=>{
            res.status(200).json(result);
        });
    }

}

module.exports = new userController();


