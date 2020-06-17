const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    imageID: { type: String },
    source: { type: buffer },
    type: { type: String }
}, { collection: 'image', versionKey: false});

module.exports = mongoose.model('image', userSchema);