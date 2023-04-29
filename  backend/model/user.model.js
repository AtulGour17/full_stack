let mongoose = require("mongoose");

//user sechma
let userSechma = mongoose.Schema({
    email: String,
    pass: String,
    location: String,
    age: Number
},{
    versionKey : false
})
let UserModel = mongoose.model("user",userSechma)

module.exports = {
    UserModel
}