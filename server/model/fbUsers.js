const mongoose = require('mongoose')

const schemaFBUsers = new mongoose.Schema({
  name: String,
  email: String,
  fb_id: String,
  img: String
});
const FBusers = mongoose.model('FBusers', schemaFBUsers);

module.exports = FBusers
