let express = require("express");
let noteRouter = express.Router();
let {NotesModel} = require("../model/notes.model")

noteRouter.get("/",async(req,res)=>{
   try{
    let notes = await NotesModel.find();
    res.status(200).send(notes)
   }catch(err){
    res.status(400).send({"msg":err.message})
   }
})

noteRouter.post("/add",async(req,res)=>{
    try{ 
        let note = new NotesModel(req.body);
        await note.save()
        res.status(200).send({"msg":"A new Note has been added"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

noteRouter.patch("/update/:noteID",(req,res)=>{
    
})

noteRouter.delete("/delete/:noteID",(req,res)=>{
    
})

module.exports={
    noteRouter
}