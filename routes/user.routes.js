const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Routing standar REST API
router.get('/', userController.getAll);           // get all
router.get('/:id', userController.getById);       // search by id
router.post('/', userController.create);          // new data
router.put('/:id', userController.update);        // update
router.delete('/:id', userController.delete);     // delete

module.exports = router;
