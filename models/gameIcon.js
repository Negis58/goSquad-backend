const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    gameID: { type: String },
    gameIcon: { data: Buffer, contentType: String }
}, { collection: 'gameIcon', versionKey: false});

module.exports = mongoose.model('gameIcon', userSchema);