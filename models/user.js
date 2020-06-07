const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, unique: true },
    nickname: { type: String, unique: true },
    password: { type: String }
}, { collection: 'user',
    versionKey: false});

module.exports = mongoose.model('User',userSchema);