const express = require('express')
const BeanController = require('./bean-controller')

// const apiMiddleware = require('../middleware/api.auth');

const router = express.Router()

router.get('/bean', BeanController.list)

router.get('/bean/:id', BeanController.get)

router.post('/bean', BeanController.store)

router.put('/bean/:id', BeanController.update)

router.delete('/bean/:id', BeanController.destroy)

module.exports = router
