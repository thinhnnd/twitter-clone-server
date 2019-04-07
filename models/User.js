const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String, 
        unique: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)