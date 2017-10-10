const express = require('express')
const router = express.Router()
const users = require("../controller/users")


router.get("/", users.getAll)
router.put("/:id", users.edit)
router.delete("/:id", users.remove)
router.post("/login", users.login)
router.post("/register", users.register)


module.exports = router
