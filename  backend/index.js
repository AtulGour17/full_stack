let express = require("express");
let {connection} = require("./db");
const { userRouter } = require("./routes/user.routes");
let {noteRouter} = require("./routes/notes.routes")
// let {auth} = require("./middleware/auth.middleware ")


let app = express();
app.use(express.json())


app.use("/users",userRouter)
// app.use(auth)
app.use("/notes",noteRouter)

app.listen(1111,async()=>{
      try{
         await connection
         console.log("connected to mongoDB")
      }catch(err){
         console.log(err)
         console.log("Not able to connect to mongo DB")
      }
    console.log("server is runing on port 1111")
})