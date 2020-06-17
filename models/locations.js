const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    locationID: { type: String },
    countyName: { type: String }
}, { collection: 'locations', versionKey: false});

module.exports = mongoose.model('locations', userSchema);