const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    gameID: { type: String },
    gameIcon: { type: buffer}
}, { collection: 'gameIcon', versionKey: false});

module.exports = mongoose.model('gameIcon', userSchema);