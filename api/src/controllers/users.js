const db = require('../firebase.js').database();
const admin = require('../firebase.js');

const getAllUsers = (req, res, next) => {
	db.ref('users')
		.once('value')
		.then((snapshot) => {
			const users = snapshot.val();
			res.send({response: users, message: 'Successful'});
		})
		.catch((error) => next(error));
};

const getOneUser = async (req, res, next) => {
	const {uid} = req.params.uid;
	try {
		const userRef = await db
			.ref('users')
			.orderByChild('uid')
			.equalTo(uid)
			.once('value');
		let user = userRef.val();
		res.send({response: user, message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

const findOrCreateUser = async (req, res, next) => {
	const {displayName, uid, photoURL} = req.body;
	if (!displayName || !uid)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		const userRef = await db
			.ref('users')
			.orderByChild('uid')
			.equalTo(uid)
			.once('value');
		let user = userRef.val();
		if (!user) {
			user = await db.ref('users').push({
				uid,
				fullName: displayName,
				photoURL: photoURL || 'http://www.example.com/12345678/photo.png',
				role: 'standar',
			});
		}
		const userKey = Object.keys(user)[0];
		res.send({
			response: {key: userKey, info: user[userKey]},
			message: 'Successful',
		});
	} catch (error) {
		next(error);
	}
};

const updateUser = async (req, res, next) => {
	const id = req.params.id;
	if (!id)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	const {firstName, lastName, email, role} = req.body;
	try {
		await db.ref('users/' + id).updated({firstName, lastName, email, role});
		res.send({response: 'Updated', message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

const deleteUser = async (req, res, next) => {
	const id = req.params.id;
	if (!id)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		await db.ref('users/' + id).remove();
		res.send({response: 'Deleted', message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllUsers,
	getOneUser,
	findOrCreateUser,
	updateUser,
	deleteUser,
};
