const {Router} = require('express');
const router = Router();
const tracks = require('./tracks.js');
const users = require('./users.js');

router.use('/tracks', tracks);
router.use('/users', users);
module.exports = router;
