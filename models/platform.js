const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    platformID: { type: String },
    platformName: { type: String },
    icon: { type: buffer }
}, { collection: 'platform', versionKey: false});

module.exports = mongoose.model('platform', userSchema);