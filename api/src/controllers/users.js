const db = require('../firebase.js').database();

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
	const {firstName, lastName, email, role} = req.body;
	if (!firstName || !lastName || !email)
		return res.status(400).send({
			response: '',
			message: 'Failed',
		});
	try {
		const newUser = {
			firstName,
			lastName,
			email,
			role: role || 'standar',
		};
		db.ref('users').push(newUser);
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
