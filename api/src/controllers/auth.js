const db = require('../firebase.js').database();
const admin = require('../firebase.js');

const verifyToken = async (req, res, next) => {
	try {
		const decodedToken = await admin.auth().verifyIdToken(req.query.idToken);
		const userId = decodedToken.uid;
		req.userId = userId;
		return next();
	} catch (error) {
		next(error);
	}
};

module.exports = {verifyToken};
