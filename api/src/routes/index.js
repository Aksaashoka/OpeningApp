const {Router} = require('express');
const router = Router();
const tracks = require('./tracks.js');

router.use('/tracks', tracks);

module.exports = router;
