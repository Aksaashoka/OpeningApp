const {Router} = require('express');
const router = Router();
const {
	getAllTracks,
	uploadTrack,
	updateTrack,
	deleteTrack,
} = require('../controllers/tracks.js');
const upload = require('../middlewares/upload.js');

router.get('/', getAllTracks);

router.post('/', upload.array('tracks', 2), uploadTrack);

router.put('/:id', upload.array('tracks', 2), updateTrack);

router.delete('/:id', deleteTrack);

module.exports = router;
