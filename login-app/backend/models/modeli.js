const mongoose = require("mongoose")

const sigUserSchema = new mongoose.Schema({
      Country:{
        type:String,
        required:true,
      },
      popu:{
        type:Number,
        required:true,
      }







})

mongoose.model("SIGUSER",sigUserSchema)