const express = require('express')
const router = express.Router()
const questions = require("../controller/questions")
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

router.get("/", midty, questions.getAll)
router.post("/", midty, questions.insert)
router.put("/:id", midty, questions.edit)
router.delete("/:id", midty, questions.remove)
router.get("/all", questions.getTimelineQuest)
router.get("/all/:id", questions.getid)


module.exports = router
