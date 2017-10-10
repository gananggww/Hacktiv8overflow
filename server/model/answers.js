const mongoose = require('mongoose')
// const answerSchema = require('./answer')
const Schema = mongoose.Schema

let answersSchema = new Schema({
  answer: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    // required: true
  },
  questions: {
    type: Schema.Types.ObjectId,
    ref: 'questions'
  }
}, {
  timestamps: true
})

let answersModel = mongoose.model('answers', answersSchema)

module.exports = answersModel
