const express = require('express')
const CampaignController = require('./campaign-controller')

// const apiMiddleware = require('../middleware/api.auth');

const router = express.Router()

router.get('/campaign', CampaignController.list)

router.get('/campaign/:id', CampaignController.get)

router.post('/campaign', CampaignController.store)

router.put('/campaign/:id', CampaignController.update)

router.delete('/campaign/:id', CampaignController.destroy)

module.exports = router
