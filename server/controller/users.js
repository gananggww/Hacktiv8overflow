const ObjectId = require("mongodb").ObjectId
const db = require("../model/users")
const jwt = require('jsonwebtoken');

const getAll = (req, res)=>{
 db.find()
 .then(rows=>{
   res.send(rows)
 })
 .catch(err=>{
   res.send(err)
 })
}


const login = (req, res)=>{
  // console.log(req);
  db.findOne({username : req.body.username})
  .then(row=>{
    // console.log(row);
    if(row.password == req.body.password) {
      var token = jwt.sign({ id: row._id, username : row.username }, 'shhhhh');
      res.send({token : token, username : row.username})
      // res.send("berhasil")
    }
    else{
      res.send({token : null})
    }
  })
  .catch(err=>{
    // console.log(err);
    res.send({token : null})
  })
}

const register = (req, res)=>{
  db.create({
    name: req.body.name,
    email: req.body.email,
    username : req.body.username,
    password : req.body.password,
  }).then(response => {
    console.log(response);
    res.send("Berhasil menambahkan")
  })
  .catch(err=>{
    console.log(err);
    res.send("Gagal menambahkan")
  })
}


const remove = (req, res)=>{
  if(req.headers.token == null){
    res.send("maaf anda harus login")
  }else{
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    if(decoded.id == ObjectId(req.params.id)){
      db.remove({_id: ObjectId(req.params.id)})
      .then(()=>{
        res.send("Berhasil menghapus")
      }).catch(err=>{
        res.send("Gagal menghapus")
      })
    }else{
      res.send("tidak punya hak untuk hapus")
    }
  }
}

const edit = (req, res)=>{
  if(req.headers.token == null){
    res.send("maaf anda harus login")
  }else{
    var decoded = jwt.verify(req.headers.token, "shhhhh")
    if(decoded.id == ObjectId(req.headers.id)){
      db.update({_id: ObjectId(req.params.id)},{
        username : req.body.username,
        password : req.body.password,
        secret : req.body.secret
      })
      .then(()=>{
        res.send("Berhasil edit")
      })
      .catch(err=>{
        res.send("Gagal edit")
      })
    }else{
      res.send("tidak punya hak untuk edit")
    }
  }
}
module.exports = {
  login,
  register,
  getAll,
  remove,
  edit
}
