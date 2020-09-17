const Album = require('../models/album')

module.exports = {
    create,
    index,
    delete: deleteOne,
    update
}

function create(req,res) {
    req.body.addedBy = req.user._id
    req.body.artist = req.body.artist.split(',');
    Album.create(req.body)
    .then(album => {res.json(album)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Album.find({})
    .populate('addedBy')
    .then(albums => {res.json(albums)})
    .catch(err => {res.json(err)})
  }

  function deleteOne(req, res) {
    Album.findByIdAndDelete(req.params.id)
    .then(album => {res.json(album)})
    .catch(err => {res.json(err)})
  }

  function update(req, res) {
    Album.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .populate('addedBy')
    .then(album => {res.json(album)})
    .catch(err => {res.json(err)})
  }