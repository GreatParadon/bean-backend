const Campaign = require('./campaign-model')

exports.list = (req, res) => {
    Campaign.find().exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.get = (req, res) => {
    const id = req.params.id

    Campaign.findById(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.store = (req, res) => {
    const data = req.body

    let campaign = new Campaign(data)
    campaign.save()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })

}

exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body

    Campaign.findByIdAndUpdate(id, data).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.destroy = (req, res) => {
    const id = req.params.id

    Campaign.findByIdAndRemove(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}