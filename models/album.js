const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const albumSchema = new Schema ({
    name: {type: String, 
           required: true},
    artist: {type: String, 
              required: true
            },
    releaseYear: {type: String},
    producer: {type: String},
    runTime: {type: Number},
    genre: {type: String},
    image: {type: String},
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true })

module.exports = mongoose.model('Album', albumSchema)