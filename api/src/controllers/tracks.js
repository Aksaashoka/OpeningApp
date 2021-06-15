const bucket = require('../storage.js');
const {STORAGE_BASEURL} = process.env;
const db = require('../firebase.js').database();

const getAllTracks = (req, res, next) => {
	db.ref('tracks')
		.once('value')
		.then((snapshot) => {
			const tracks = snapshot.val();
			res.send({response: tracks, message: 'Successful'});
		})
		.catch((error) => next(error));
};

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
		await db.ref('tracks').push(newTrack);
		res.send({response: newTrack, message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

const updateTrack = async (req, res, next) => {
	const id = req.params.id;
	if (!id)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	const {name, year, serie, audioUrl, imageUrl} = req.body;
	const files = req.files;

	try {
		if (files) {
			const data = await Promise.all(
				files.map((file) =>
					bucket.upload(file.path, {destination: file.filename})
				)
			);
			audioUrl = STORAGE_BASEURL + data[0][0].name;
			imageUrl = STORAGE_BASEURL + data[1][0].name;
		}
		await db
			.ref('tracks/' + id)
			.update({name, year, serie, audioUrl, imageUrl});
		res.send({response: 'Updated', message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

const deleteTrack = async (req, res, next) => {
	const id = req.params.id;
	if (!id)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		await db.ref('tracks/' + id).remove();
		res.send({response: 'Deleted', message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllTracks,
	uploadTrack,
	updateTrack,
	deleteTrack,
};
