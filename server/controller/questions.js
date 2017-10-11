const ObjectId = require("mongodb").ObjectId
const db = require("../model/questions")
const jwt = require('jsonwebtoken');

const insert = (req, res)=>{
  db.create({
    title: req.body.title,
    content: req.body.content,
    upvote: req.body.vote,
    user: req.headers.oten.id,
    answers: []
  })
  .then(response => {
    console.log('blm di populate ', response)
    response.populate('user', function(err) {
      if (err) {
        console.log('ternyata error ', err)
        res.send(err)
      }
      else {
        res.send(response)
      }
    })
  })
  .catch(err => {
    res.send(err)
  })
}

const getTimelineQuest = (req, res)=>{
  db.find()
  .sort([['updatedAt', 'descending']])
  .populate('user')
  .exec((err, response) => {
    if (!err) {
      res.send(response)
    } else {
      res.send(err)
    }
  })
  .catch(err => {
    res.send(err)
  })
}

const getAll = (req, res)=>{
  db.find({user:req.headers.oten.id})
  .sort([['updatedAt', 'descending']])
  .populate('user')
  .then(rows=>{
    // console.log(rows);
    res.send(rows)
  })
  .catch(err=>{
  res.send(err)
    // console.log(err);
  })
}

const getid = (req, res) => {
  db.find({_id: ObjectId(req.params.id)})
  .populate('user')
  .then(response => {
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

const remove = (req, res)=>{
  db.remove({_id: ObjectId(req.params.id), user:req.headers.oten.id})
  .then(()=>{
    res.send("Berhasil menghapus")
  }).catch(err=>{
    res.send("Gagal menghapus")
  })
}

const edit = (req, res)=>{
  db.update({_id: ObjectId(req.params.id), user: req.headers.oten.id},{
    title: req.body.title,
    content: req.body.content,
    user: req.headers.oten.id,
  })
  .then(() => {
    db.findOne({_id: req.params.id})
    .then(response => {
      response.populate('user', (err) => {
        if (!err) {
          res.send(response)
        } else {
          res.send(err)
        }
      })
    }).catch(err=>{res.send(err)})
  })
  .catch(err=>{
    // res.send(err)
    console.log(err)
  })
}
module.exports = {
  getAll,
  remove,
  edit,
  insert,
  getTimelineQuest,
  getid
}
