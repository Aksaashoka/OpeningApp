const {Router} = require('express');
const router = Router();
const tracks = require('./tracks.js');
const users = require('./users.js');
const auth = require('./auth.js');

router.use('/tracks', tracks);
router.use('/users', users);
router.use('/auth', auth);

module.exports = router;
