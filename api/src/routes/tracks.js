const {Router} = require('express');
const router = Router();
const {uploadTrack} = require('../controllers/tracks.js');
const upload = require('../middlewares/upload.js');

router.get('/', (req, res) => {
	res.send('hola');
});

router.post('/', upload.single('track'), uploadTrack);

module.exports = router;
