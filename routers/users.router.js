const { Router } = require("express");
const { POST } = require("../controller/users.controller");
const { CHECK } = require("../middleWare/users.middle");
const router = Router();

router.post("/register", CHECK, POST);

module.exports = router;
