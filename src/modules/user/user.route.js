const router = require('express').Router();
const controller = require('./user.controller');

const authMiddleware = require('../../middlewares/auth.middleware');
const authorize = require('../../middlewares/role.middleware');

router.post('/login', controller.login);
router.post('/', controller.createUser);
router.get('/', authMiddleware, authorize("ADMIN"), controller.getUsers);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', authMiddleware, authorize("ADMIN"), controller.deleteUser);
router.patch('/:id/status', controller.toggleUserStatus);

// User self-service routes
router.get('/me', authMiddleware, controller.updateMe);
router.put('/me', authMiddleware, controller.deleteMe);
module.exports = router;