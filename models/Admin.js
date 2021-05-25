const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    confirmPassword:{type:String, required:true},
    date:{type:Date, default: Date.now}
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = adminSchema