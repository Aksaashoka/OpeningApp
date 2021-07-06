const {Router} = require('express');
const router = Router();
const {
	getAllUsers,
	getOneUser,
	findOrCreateUser,
	updateUser,
	deleteUser,
} = require('../controllers/users.js');

router.get('/', getAllUsers);

router.get('/:uid', getOneUser);

router.post('/', findOrCreateUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
