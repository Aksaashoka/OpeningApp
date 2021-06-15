const {Router} = require('express');
const router = Router();
const {uploadTrack} = require('../controllers/tracks.js');
const upload = require('../middlewares/upload.js');

router.get('/', (req, res) => {
	res.send('hola');
});

router.post('/', upload.array('tracks', 2), uploadTrack);

module.exports = router;
