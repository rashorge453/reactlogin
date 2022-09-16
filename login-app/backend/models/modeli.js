const mongoose = require("mongoose")

const sigUserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true
    }

})

mongoose.model("SIGUSER",sigUserSchema)