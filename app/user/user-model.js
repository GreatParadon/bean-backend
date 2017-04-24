const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: String,
    name: String
}, {
    timestamps: true
})

UserSchema.methods.exampleMethod = (parameter) => {
    // Logic
}

const User = mongoose.model('User', UserSchema)

module.exports = User