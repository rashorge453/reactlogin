const express = require("express")
const routery = express.Router()
const mongoose = require("mongoose")
const USER = mongoose.model('SIGUSER')
const bcrypt = require('bcrypt')
routery.get('/',(req,res)=>{
    res.send('hello')
})

routery.post("/Welcome",(req,res)=>{
    const{Country,popu}=req.body
    const user = new USER({
        Country,
        popu

    })
    user.save()
    .then(user=>{res.json({message:" Data saved"}) })
            .catch(err=>{console.log(err)})
})
    
    

module.exports = routery
