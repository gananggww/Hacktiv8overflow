const express = require('express')
const router = express.Router()
const answers = require("../controller/answers")
const jwt = require('jsonwebtoken');



const midty = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    console.log('==============================',decoded);
    req.headers.oten = decoded
    console.log("==========================================================================>", req.headers.oten);
    next()
  }
  else {
    res.send("maaf anda harus login")
  }
}

router.get("/", midty, answers.getAll)
router.post("/", midty, answers.insert)
router.delete("/:id", midty, answers.remove)


module.exports = router
