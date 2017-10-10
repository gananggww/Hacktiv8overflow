const ObjectId = require("mongodb").ObjectId
const db = require("../model/questions")
const jwt = require('jsonwebtoken');
const dbQuestions = require('../model/questions')

const insert = (req, res)=>{
  db.create({
    answer: req.body.answer,
    user: req.headers.oten.id,
    questions: ObjectId(req.params.id)
  })
  .then(response=>{
    // res.send(response)
    dbQuestions.update({
      _id: ObjectId(req.params.id)
    }, {
      $push: {
        answers: response._id
      }
    })
  })
  .catch(err=>{
    res.send(err)
  })
}
const getAll = (req, res)=>{
  db.find({user:req.headers.oten.id})
  .populate({path:'users', select: 'username'})
  .then(rows=>{
    // console.log(rows);
    res.send(rows)
  })
  .catch(err=>{
  res.send(err)
    // console.log(err);
  })
}
const remove = (req, res)=>{
  db.remove({_id: ObjectId(req.params.id), user:req.headers.oten.id})
  .then(response=>{
    dbQuestions.update({
      _id: ObjectId(req.params.id)
    },{
      $pull: response._id
    })
    res.send("Berhasil menghapus")
  }).catch(err=>{
    res.send("Gagal menghapus")
  })
}

module.exports = {
  getAll,
  remove,
  insert
}
