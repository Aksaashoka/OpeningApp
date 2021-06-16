const {Router} = require('express');
const router = Router();
const {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/users.js');

router.get('/', getAllUsers);

router.post('/', createUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;
