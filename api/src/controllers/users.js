const db = require('../firebase.js').database();

const createUser = async (req, res, next) => {
	const {firstName, lastName, email} = req.body;
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
		};
		db.ref('users').push(newUser);
		res.send({response: newUser, message: 'Successful'});
	} catch (error) {
		next(error);
	}
};

module.exports = createUser;
