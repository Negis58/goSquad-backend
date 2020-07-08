const locations = require('../models/locations');
const mongoose = require('mongoose');

class locationsController {

    getLocations(req, res) {
        locations.find(function (err, user, next) {
            if (err) return next(err);
        });
    }

    createLocations(req,res,next) {
        const user = new locations({
            locationID: req.body.locationID,
            countyName: req.body.countyName
        });
        user.save();
    }
}

module.exports = new locationsController();