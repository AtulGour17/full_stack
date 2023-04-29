let mongoose = require("mongoose");

let connection = mongoose.connect("mongodb+srv://atulgour:atulgaur@cluster0.izhabun.mongodb.net/authlecture?retryWrites=true&w=majority");

module.exports={
    connection
}