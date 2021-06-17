const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
	if (file) {
		file.mimetype.includes('audio') || file.mimetype.includes('image')
			? cb(null, true)
			: cb(new Error('File format not allowed.'), false);
	} else {
		cb(new Error('Sorry, file upload failed.'));
	}
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname.replace('middlewares', 'public/uploads'));
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + '-' + Date.now() + path.extname(file.originalname)
		);
	},
});

const limits = {fileSize: 8 * 1024 * 1024};

const upload = multer({
	storage,
	fileFilter,
	limits,
});

module.exports = upload;
