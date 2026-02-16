const router = require('express').Router();
const controller = require('./user.controller');

router.post('/login', controller.login);
router.post('/', controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.patch('/:id/status', controller.toggleUserStatus);

module.exports = router;