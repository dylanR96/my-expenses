const { Router } = require("express");
const router = Router();
const { signUp, login } = require("../controllers/userController.js");

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
