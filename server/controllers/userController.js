const addUserModel = require("../models/modelUser.js");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  const newUser = new addUserModel({
    email: email,
    password: password,
  });
  await newUser.save();
  res.status(200).send("User created");
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  await db.users.find({ email: email });
  res.status(200).send("User found");
};

module.exports = { signUp, login };
