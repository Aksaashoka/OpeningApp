const bucket = require('../storage.js');
const {STORAGE_BASEURL} = process.env;
const db = require('../firebase.js').database();
const filterTracks = require('../utils/filterTracks.js');

const getAllTracks = (req, res, next) => {
	const order =
		req.query.order === 'serie'
			? 'serie'
			: req.query.order === 'genre'
			? 'genre'
			: 'year';
	const direction =
		req.query.direction && req.query.direction.toLowerCase() === 'desc'
			? 'desc'
			: 'asc';
	const timeFrame = req.query.years ? req.query.years.split('-') : '';
	const genre = req.query.genre || '';
	const serie = req.query.serie || '';
	const offset = req.query.offset ? Number(req.query.offset) : 0;
	const limit = req.query.limit ? Number(req.query.limit) : 6;

	db.ref('tracks')
		.orderByChild(order)
		.once('value')
		.then((snapshot) => {
			let tracks = [];
			snapshot.forEach((data) => {
				tracks.push(data.val());
			});
			const filteredTracks = filterTracks(tracks, timeFrame, serie, genre);
			const result =
				direction === 'desc' ? filteredTracks.reverse() : filteredTracks;
			const totalPages = Math.ceil(result.length / limit);
			const pages = new Array(totalPages)
				.fill('')
				.map(
					(path, index) =>
						`${
							process.env.BACKEND_URL
						}/tracks/?serie=${serie}&genre=${genre}&years=${
							req.query.years
						}&order=${order}&direction=${direction}&offset=${
							limit * index
						}&limit=${limit}`
				);
			res.send({
				response: {tracks: result.slice(offset, limit + offset), pages},
				message: 'Successful',
			});
		})
		.catch((error) => next(error));
};

const uploadTrack = async (req, res, next) => {
	req.body = {...JSON.parse(req.body.body)};
	const {name, year, serie, genre} = req.body;
	const files = req.files;
	if (!files || !name || !year || !serie || !genre)
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
			genre,
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
	req.body = {...JSON.parse(req.body.body)};
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
