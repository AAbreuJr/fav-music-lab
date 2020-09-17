const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
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
    addedBy: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })

module.exports = mongoose.model('Song', songSchema);