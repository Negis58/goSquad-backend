const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    gameID: { type: String },
    gameName: { type: String },
    description: { type: String },
    gameIconID: { type: String }
}, { collection: 'game', versionKey: false});

module.exports = mongoose.model('game', userSchema);