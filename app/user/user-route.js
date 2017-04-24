const express = require('express')
const UserController = require('./user-controller')

// const apiMiddleware = require('../middleware/api.auth');

const router = express.Router()

router.get('/user', UserController.list)

router.get('/user/:id', UserController.get)

router.post('/user', UserController.store)

router.put('/user/:id', UserController.update)

router.delete('/user/:id', UserController.destroy)

module.exports = router
