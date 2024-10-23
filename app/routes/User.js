const express = require('express')
const UserController = require('../controllers/User')
const router = express.Router();
router.get('/findAll', UserController.findAll);
router.get('/findOne/:id', UserController.findOne);
router.post('/create', UserController.create);
router.patch('/update/:id', UserController.update);
router.delete('/destroy/:id', UserController.destroy);
module.exports = router;