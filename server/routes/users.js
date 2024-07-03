const { Router } = require("express");
const router = Router();
const { signUp, login } = require("../controllers/userController.js");
const { checkSignUp, checkLogin } = require("../middlewares/checkUser.js");

router.post("/signup", checkSignUp, signUp);
router.post("/login", checkLogin, login);

module.exports = router;
