const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    email: String,
    name: String
}, {
    timestamps: true
})

AdminSchema.methods.exampleMethod = (parameter) => {
    // Logic
}

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin