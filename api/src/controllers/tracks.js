const bucket = require('../storage.js');
const {STORAGE_BASEURL} = process.env;
const db = require('../firebase.js').database();

const uploadTrack = async (req, res, next) => {
	//req.body = {...JSON.parse(req.body.body)};
	const {name, year, serie} = req.body;
	const file = req.file;
	if (!file || !name || !year || !serie)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		const data = await bucket.upload(file.path, {destination: file.filename});
		const url = STORAGE_BASEURL + data[0].name;
		const newTrack = {
			name,
			year,
			serie,
			url,
		};
		db.ref('tracks').push({response: newTrack, message: 'Successful'});
		res.send(newTrack);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	uploadTrack,
};
