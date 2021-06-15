const admin = require('firebase-admin');
const {DATABASE_URL, GOOGLE_APPLICATION_CREDENTIALS} = process.env;

var serviceAccount = require(GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: DATABASE_URL,
});

module.exports = admin;
