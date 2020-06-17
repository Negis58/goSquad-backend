const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    postID: { type: String },
    createByUser: { type: String },
    text: { type: String },
    imageIds: { type: Array[String] }
}, { collection: 'message', versionKey: false});

module.exports = mongoose.model('message', userSchema);