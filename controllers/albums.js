const Album = require('../models/album')

module.exports = {
    create,
}

function create(req,res) {
    req.body.addedBy = req.user._id
    req.body.artist = req.body.artist.split(',');
    Album.create(req.body)
    .then(album => {res.json(album)})
    .catch(err => {res.json(err)})
}