const bucket = require('../storage.js');
const {STORAGE_BASEURL} = process.env;
const db = require('../firebase.js').database();

const uploadTrack = async (req, res, next) => {
	//req.body = {...JSON.parse(req.body.body)};
	const {name, year, serie} = req.body;
	const files = req.files;
	if (!files || !name || !year || !serie)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		const data = await Promise.all(
			files.map((file) =>
				bucket.upload(file.path, {destination: file.filename})
			)
		);
		const audioUrl = STORAGE_BASEURL + data[0][0].name;
		const imageUrl = STORAGE_BASEURL + data[1][0].name;
		const newTrack = {
			name,
			year,
			serie,
			audioUrl,
			imageUrl,
		};
		db.ref('tracks').push(newTrack);
		res.send({response: newTrack, message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	uploadTrack,
};
