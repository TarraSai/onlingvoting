const express=require('express')
const router=express.Router()
const controller=require('../controllers/controllers')


router.get('/register',controller.register)
router.post("/register", controller.register);
router.get('/login',controller.Login)
router.post('/login',controller.Login)



module.exports=router