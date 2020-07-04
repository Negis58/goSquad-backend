const profile = require('../models/profile');
const mongoose = require('mongoose');

class profileController {

    getProfile(req,res) {
        profile.find(function (err,profile,next) {
            if (err) return next(err);
            res.json(profile);
        });
    }
    createProfile(req,res,next) {
        const profiles = new profile({
            platformId: req.body.platformId,
            nickname: req.body.nickname
        });
        profiles.save();
    }
    

}

module.exports = new profileController();