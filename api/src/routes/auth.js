const {Router} = require('express');
const router = Router();
const {verifyToken} = require('../controllers/auth.js');

router.get('/', verifyToken);

module.exports = router;
