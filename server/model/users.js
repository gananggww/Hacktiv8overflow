const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fb_id: String,
  email: {
    type: String,
    required: true
    // unique: true
  },
  img: String,
  username: String,
  password: String
}, {
  timestamps: true
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;
