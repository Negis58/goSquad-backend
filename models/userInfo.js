const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nickname: { type: String, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    age: { type: Number},
    possibility_of_voice_communication: { type: Boolean },
    game_experience: { type: String},
    preference_level_of_difficulty: { type: String },
    how_much_players: { type: Number },
    possibility_of_buying_new_game: { type: Boolean},
    country: { type: String },
    online_time: {type: Date},
    date_of_birth: { type: Date },
    phone_number: { type: Number, unique: true },
    profile_steam: { type: String},
    profile_Battle_net: {type: String},
}, { collection: 'userInfo', versionKey: false});

module.exports = mongoose.model('UserInfo', userSchema);
