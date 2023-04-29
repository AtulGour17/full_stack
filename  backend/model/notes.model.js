let mongoose = require("mongoose");

//user sechma
let noteSechma = mongoose.Schema({
    title: String,
    body: String,
    subject: String
   
},{
    versionKey : false
})
let NotesModel = mongoose.model("note",noteSechma)

module.exports = {
    NotesModel
}