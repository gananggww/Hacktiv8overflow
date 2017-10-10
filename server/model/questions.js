const mongoose = require('mongoose')
// const answerSchema = require('./answer')
const Schema = mongoose.Schema

let questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'answers'
  }]
}, {
  timestamps: true
})

let questionModel = mongoose.model('questions', questionSchema)

module.exports = questionModel
