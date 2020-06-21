const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    serviceID: { type: String },
    serviceName: { type: String },
    icon: { type: buffer }
}, { collection: 'gamingService', versionKey: false});

module.exports = mongoose.model('gamingService', userSchema);