const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.get('/', function(req, res, next) {
    User.find(function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

router.post('/', function (req,res, next) {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password
    });
    user.save();
});
router.delete("/:id", function (req,res,next) {
    const id = req.params.id;
    User.remove({_id:id}).then(result=>{
        res.status(200).json(result);
    });
});

module.exports = router;