const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    lastName:{type: String},
    firstName:{type: String},
    userName:{type: String},
    email:{type: String},
    password:{type: String},
    adress:{type: String, required:true},
    gender:{type: String},
    dateOfBirth:{type: Date},
    phoneNumber:{type: String, required:true},
    role:{type: String, enum:['admin','client'], default:'client'},
})

module.exports = User = mongoose.model('user', userSchema)