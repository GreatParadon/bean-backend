const Admin = require('./admin-model')

exports.list = (req, res) => {
    Admin.find().exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.get = (req, res) => {
    const id = req.params.id

    Admin.findById(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.store = (req, res) => {
    const data = req.body
    let admin = new Admin(data)
    admin.save()
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

    Admin.findByIdAndUpdate(id, data).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}

exports.destroy = (req, res) => {
    const id = req.params.id

    Admin.findByIdAndRemove(id).exec()
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            return res.json({error: err})
        })
}