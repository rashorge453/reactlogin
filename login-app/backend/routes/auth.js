const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const USER = mongoose.model('USER')
const bcrypt = require('bcrypt')
router.get('/',(req,res)=>{
    res.send('hello')
})

router.post("/SignUp",(req,res)=>{
    const{name,email,password}=req.body
    if(!name|| !email||!password){
       return res.status(422).json({error:"please add all the fields"})
    }
    USER.findOne({$or:[{email:email}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists with that email"})
        }
        bcrypt.hash(password,12).then((hashedPassword)=>{
            const user = new USER({
                name,
                email,
                password:hashedPassword
            })
            user.save()
            .then(user=>{res.json({message:" Registered succesfully"}) })
            .catch(err=>{console.log(err)})
        })
    })
    
})
router.post("/SignIn", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "email and password required" })
    }
    USER.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Wrong email" })
        }
        bcrypt.compare(password, savedUser.password).then((match) => {
            if (match) {
                return res.status(200).json({ message: "Signed in Successfully" })
            } else {
                return res.status(422).json({ error: "Invalid password" })
            }
        })
            .catch(err => console.log(err))
    })
})




module.exports = router
