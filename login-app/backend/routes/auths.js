const express = require("express")
const routery = express.Router()
const mongoose = require("mongoose")
const USER = mongoose.model('SIGUSER')
const bcrypt = require('bcrypt')
routery.get('/',(req,res)=>{
    res.send('hello')
})

routery.post("/SignIn",(req,res)=>{
    const{email,password}=req.body
    if(!email||!password){
       return res.status(422).json({error:"please add all the fields"})
    }
   
  
        bcrypt.hash(password,12).then((hashedPassword)=>{
            const usera = new USER({
                email,
                password:hashedPassword
            })
            usera.save()
            .then(usera=>{res.json({message:" Registered succesfully"}) })
            .catch(err=>{console.log(err)})
        })
    


 })
    

module.exports = routery
