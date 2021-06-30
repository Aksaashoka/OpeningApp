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

const createUser = async (req, res, next) => {
	const {email, phoneNumber, password, fullName, photoURL} = req.body;
	if (!email || !phoneNumber || !password || !fullName)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		const newUser = await admin.auth().createUser({
			email,
			emailVerified: false,
			phoneNumber,
			password,
			displayName: fullName,
			photoURL: photoURL || 'http://www.example.com/12345678/photo.png',
			disabled: false,
		});
		res.send({response: newUser, message: 'Successful'});
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

module.exports = {getAllUsers, createUser, updateUser, deleteUser};
