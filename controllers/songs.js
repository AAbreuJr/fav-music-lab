const Song = require('../models/song');

module.exports = {
    create,
    index,
    delete: deleteOne,
    update
}

function index(req, res) {
    Song.find({})
    .populate('addedBy')
    .then(songs => {res.json(songs)})
    .catch(err => {res.json(err)})
  }

function deleteOne(req, res) {
    Song.findByIdAndDelete(req.params.id)
        .then(song => {res.json(song)})
        .catch(err => {res.json(err)})
}
  
function create(req, res) {
    req.body.addedBy = req.user._id
    req.body.artist = req.body.artist.split(',');
    Song.create(req.body)
        .then(song => { res.json(song) })
        .catch(err => { res.json(err) })
}

function update(req, res) {
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .populate('addedBy')
    .then(song => {res.json(song)})
    .catch(err => {res.json(err)})
}