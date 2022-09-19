const mongoose = require("mongoose")

const sigUserSchema = new mongoose.Schema({
      Year:{
        type:Number,
        required:true,
      },
      Price:{
        type:Number,
        required:true,
      }







})

mongoose.model("SIGUSER",sigUserSchema)