const express = require('express')
const app = express()
const PORT = 5000;
const mongoose = require('mongoose')
const mongoURL = require('./pas.js')
const cors = require("cors")
require('./models/model.js')
require('./models/modeli.js')
app.use(cors())
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require('./routes/auths.js'))
mongoose.connect(mongoURL)
mongoose.connection.on('connected',()=>{
    console.log("succesfully connected to mongo")
})
mongoose.connection.on('error',()=>{
    console.log("not connected to mongo")
})

app.listen(PORT,()=>{
    console.log("server is running on port "+ PORT)
})