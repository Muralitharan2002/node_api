const express = require("express");
const controller = require("../controllers/user.controller");
const router = express.Router()

router.post("/create", controller.create)
router.get("/fetch", controller.randomUser)
router.get("/checkExist", controller.checkExist)
router.post("/filter", controller.filterAge)
router.get("/allNames", controller.allNames)



module.exports = router