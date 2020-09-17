const router = require('express').Router();
const albumsCtrl = require('../controllers/albums')

// public routes
router.get('/', albumsCtrl.index);

// protected routes
router.use(require('../config/auth'));
router.post('/', checkAuth, albumsCtrl.create);
router.delete('/:id', checkAuth, albumsCtrl.delete);
router.put('/:id', checkAuth, albumsCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

  module.exports = router;