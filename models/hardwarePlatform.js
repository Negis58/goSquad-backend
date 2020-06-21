const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
   platformID: { type: String },
    platformName: { type: String },
    icon: { type: buffer }
}, { collection: 'hardwarePlatform', versionKey: false});

module.exports = mongoose.model('hardwarePlatform', userSchema);