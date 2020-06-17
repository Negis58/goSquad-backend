const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    platformID: { type: String },
    nickname: { type: String }
}, { collection: 'profile', versionKey: false});

module.exports = mongoose.model('profile', userSchema);