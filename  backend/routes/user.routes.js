let express = require("express");
let userRouter = express.Router()
let jwt = require("jsonwebtoken")
let bcrypt = require("bcrypt");

let {UserModel} = require("../model/user.model")

userRouter.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


userRouter.post("/r", async(req,res)=>{
    let {email,pass,location,age} = req.body;
    try{
        bcrypt.hash( pass, 5, async(err, hash) =>{
            let user = new UserModel({email,pass:hash,location,age});
            await user.save();
            res.status(200).send({"msg":"registertion has been done"})
        });
       }catch(err){
        res.status(400).send({"msg":err.message})
    }
    
    
})

userRouter.post("/login",async(req,res)=>{
    let {email,pass} = req.body;
    try{
        let user = await UserModel.findOne({email})
        if(user){
        bcrypt.compare(pass, user.pass, (err, result)=> {
            if(result){
                res.status(200).send({"msg":"login successfully","token": jwt.sign({ name: 'batman' }, 'bruce')})
            }else{
                res.status(400).send({"msg":"login failed"})
            }
        });
        }
       
        }
       catch(err){
          res.status(400).send({"msg":err.message})
       }
})

userRouter.get("/details",(req,res)=>{
    let {token} = req.query;
    jwt.verify(token, 'bruce', (err, decoded) =>{
        decoded? res.status(200).send("User Details") :res.status(400).send({"msg":"Login Needed"})
      });
})

userRouter.get("/movies",(req,res)=>{
    let {token} = req.query;
    jwt.verify(token, 'bruce', (err, decoded) =>{
        decoded? res.status(200).send("movies") :res.status(400).send({"msg":"Login Needed"})
      });
})
      
    


module.exports = {
    userRouter
}