const mongoose=require('mongoose')
const env=require('dotenv')
env.config()
mongoose.connect(process.env.Mongodb_Url).then(()=>{
    console.log("database is connected")
}).catch((error)=>{console.log("database is not connected",error)})


module.exports=mongoose