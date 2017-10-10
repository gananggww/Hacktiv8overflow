const express = require('express')
const router = express.Router()
const FB = require('fb')
const fb = new FB.Facebook({version: 'v2.10'});
const users = require('../controller/fbUsers')

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.fbaccesstoken)
  next()
}

router.get('/login', setAccessToken, users.login)

module.exports = router
