const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect(`mongodb://gananggww:Fn2yRagWtCPhdWIJ@cluster0-shard-00-00-rcykk.mongodb.net:27017,cluster0-shard-00-01-rcykk.mongodb.net:27017,cluster0-shard-00-02-rcykk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`, (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("database conected");
  }
});


// UyxNtLEd4lwSaY5l

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const questions = require("./router/questions")
const answers = require("./router/answers")
const users = require("./router/users")
const fbUsers = require("./router/fbUsers")

app.use('/fbUsers', fbUsers)
app.use('/users', users)
app.use('/answers', answers)
app.use('/questions', questions)

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || 3000);

app.listen(port)
