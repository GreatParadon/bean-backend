const express = require('express')
const AdminController = require('./admin-controller')

// const apiMiddleware = require('../middleware/api.auth');

const router = express.Router()

router.get('/admin', AdminController.list)

router.get('/admin/:id', AdminController.get)

router.post('/admin', AdminController.store)

router.put('/admin/:id', AdminController.update)

router.delete('/admin/:id', AdminController.destroy)

module.exports = router
