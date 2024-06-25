const { Router } = require("express");
const router = Router();
const { signUp, login } = require("../controllers/userController.js");
const checkUser = require("../middlewares/checkUser.js");

router.post("/signup", checkUser, signUp);
router.post("/login", login);

module.exports = router;
