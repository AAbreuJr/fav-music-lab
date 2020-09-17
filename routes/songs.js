const router = require('express').Router();
const tvshowsCtrl = require('../controllers/songs');

// Public Routes
router.get('/', songsCtrl.index);

// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, songsCtrl.create);
router.delete('/:id', checkAuth, songsCtrl.delete);
router.put('/:id', checkAuth, songsCtrl.update)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;