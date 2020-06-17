const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    postID: { type: String },
    ownerNickname: { type: String },
    creationTime: { type: Date },
    timeToLive: { type: },
    maxAmountOfPlayer: { type: Number },
    gameID: { type: String },
    description: { type: String },
    isPrivate: { type: Boolean }
}, { collection: 'post', versionKey: false});

module.exports = mongoose.model('post', userSchema);