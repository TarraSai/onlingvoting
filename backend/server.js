const express=require("express")
const app=express()
const router=require('./routers/router')
const env=require('dotenv')
const cors=require('cors')
const bodyparser=require('body-parser')
require('./databse/connection')
require("./databse/Userschema")
env.config()
const port=process.env.Port
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())
app.use('/',router)




app.listen(port,()=>{
    console.log(`serever is running at port ${port}`)
})