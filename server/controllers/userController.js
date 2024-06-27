const users = require("../models/modelUser.js");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const newUser = new users({
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
    const foundData = await users.findOne({ email: email });
    if (!foundData) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send("User found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, login };
