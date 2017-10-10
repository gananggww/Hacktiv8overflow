const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hacktivoverflow', (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("database conected");
  }
});
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const questions = require("./router/questions")
const answers = require("./router/answers")
const users = require("./router/users")

app.use('/users', users)
app.use('/answers', answers)
app.use('/questions', questions)



app.listen(3000)
