const Bean = require('./bean-model')

exports.list = (req, res) => {
    Bean.find().exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.get = (req, res) => {
    const id = req.params.id

    Bean.findById(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.store = (req, res) => {
    const data = req.body

    let bean = new Bean(data)
    bean.save()
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

    Bean.findByIdAndUpdate(id, data).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.destroy = (req, res) => {
    const id = req.params.id

    Bean.findByIdAndRemove(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}