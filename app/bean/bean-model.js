const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BeanSchema = new Schema({
    email: String,
    name: String
}, {
    timestamps: true
})

BeanSchema.methods.exampleMethod = (parameter) => {
    // Logic
}

const Bean = mongoose.model('Bean', BeanSchema)

module.exports = Bean