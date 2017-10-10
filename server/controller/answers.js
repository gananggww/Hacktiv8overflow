const ObjectId = require("mongodb").ObjectId
const db = require("../model/answers")
const jwt = require('jsonwebtoken');
const dbQuestions = require('../model/questions')

const insert = (req, res)=>{
  db.create({
    answer: req.body.answer,
    user: req.headers.oten.id,
    questions: req.params.id
  })
  .then(response=>{
    res.send(response)
    console.log(response)
    console.log(req.params.id);
    dbQuestions.update({
      _id: req.params.id
    }, {
      $push: {
        answers: response._id
      }
    })
    .then(response => {
      res.send(response)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}
const getAll = (req, res)=>{
  db.find({
    questions:req.params.id
  })
  .populate('user')
  .populate('questions')
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
