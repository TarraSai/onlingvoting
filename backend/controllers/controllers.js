const database=require('../databse/Userschema')
const bcrypt=require('bcrypt')
const env=require('dotenv')
const jwt=require('jsonwebtoken')

env.config()
exports.register=(req,res)=>{

}
exports.register = async(req, res) => {
    const{name,email,number,password}=req.body

    try{
        const userexit=await database.findOne({email:email})
        if(userexit){
            res.send("user already present")
        }
        else{
            bcrypt.hash(password,10,(error,hash)=>{
                if(error){
                    console.log("error at password hasing",error)
                }
                else{
                    const newuser = new database({ name, email, password:hash,number });
                    console.log(newuser)
                    newuser.save();
                    res.send("user register successfully");

                }
            })

            
        }

    }
    catch(error){
        console.log("error at register router",error)
    }
    
};




exports.Login=(req,res)=>{
    res.send("hello world this sai")

}
exports.Login=async(req,res)=>{
    const {email,password}=req.body
    console.log("email=",email)
    console.log("password=", password);
    try{
       const userexit=await database.findOne({email})
       console.log("user=",userexit)
       if(userexit){
        bcrypt.compare(password,userexit.password,(error,result)=>{
            if(!error && result){
                const token=jwt.sign({userId:userexit._id},process.env.Mykey,{expiresIn:'1m'})
                console.log(token)
                res.send({token
                })
            }
            else{
                res.send("eneter correct password")
            }
        })
       }
       else{
        console.log("please register");
        res.send("please register")
       }

    }catch(error){

        console.log("error at login",error)
    }
    
}