const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    nickname: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: String },
    voiceChat: { type: Boolean },
    country: { type: Number }
}, { collection: 'userInfo', versionKey: false});

module.exports = mongoose.model('UserInfo', userSchema);
