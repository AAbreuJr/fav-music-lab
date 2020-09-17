const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: [String],
        required: true
    }, 
    releaseDate: {
        type: Number
    },
    image: {
        type: String
    },
    addedBy: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })

module.exports = mongoose.model('Song', songSchema);