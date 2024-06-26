const addUserModel = require("../models/modelUser.js");
const db = require("../server.js");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const newUser = new addUserModel({
      email: email,
      password: password,
    });
    await newUser.save();
    res.status(200).send("User created");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await db.users.findOne({ email: email });
    res.status(200).send("User found");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, login };
