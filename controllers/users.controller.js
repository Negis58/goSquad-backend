const User = require('../models/user');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

exports.getUsers = function(req,res,next) {
    User.find(function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
};

exports.getUserbyID = function (req,res,next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
};

exports.createUser = function (req,res,next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            nickname: req.body.nickname,
            password: req.body.password
        });
        user.save();
    }
};

exports.removeUser = function (req, res) {
    const id = req.params.id;
    User.remove({_id:id}).then(result=>{
        res.status(200).json(result);
    });
};
