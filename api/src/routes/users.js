const {Router} = require('express');
const router = Router();
const {createUser} = require('../controllers/users.js');

router.get('/', (req, res) => {
	res.send('hola');
});

router.post('/', createUser);

module.exports = router;
