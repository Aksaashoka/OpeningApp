const server = require('./src/server.js');
const admin = require('./src/firebase.js');
const database = admin.database();
const bucket = require('./src/storage.js');

server.listen(3001, () => {
	console.log('%s listening at 3001');
	console.log(database._delegate.type + ' ' + bucket.name + ' connected');
});
