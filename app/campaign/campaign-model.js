const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CampaignSchema = new Schema({
    email: String,
    name: String
}, {
    timestamps: true
})

CampaignSchema.methods.exampleMethod = (parameter) => {
    // Logic
}

const Campaign = mongoose.model('Campaign', CampaignSchema)

module.exports = Campaign