const {Storage} = require('@google-cloud/storage');
const {GOOGLE_STORAGE_CREDENTIALS, DB_BUCKET_NAME, ID_PROJECT} = process.env;
const storage = new Storage({
	keyFilename: GOOGLE_STORAGE_CREDENTIALS,
	projectId: ID_PROJECT,
});
const bucket = storage.bucket(DB_BUCKET_NAME);

module.exports = bucket;
