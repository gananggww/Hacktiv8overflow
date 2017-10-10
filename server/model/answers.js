const mongoose = require('mongoose')
// const answerSchema = require('./answer')
const Schema = mongoose.Schema

let answersSchema = new Schema({
  answer: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  questions: {
    type: Schema.Types.ObjectId,
    ref: 'questions'
  }
})

let answersModel = mongoose.model('answers', answersSchema)

module.exports = answersModel
