const users = require("../models/modelUser.js");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const newUser = new users({
      email: email,
      password: password,
    });
    const foundData = await users.findOne({ email: email });
    if (foundData) {
      console.log("Failed to create user!");
      res.status(404).send("User was not created!");
    } else {
      await newUser.save();
      res.status(200).send("User created");
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).send("Please enter username and password");
  }
  try {
    const foundData = await users.findOne({ email: email });
    if (!foundData) {
      res.status(404).send("User not found");
    }
    foundData.verifyPassword(password, (err, valid) => {
      if (!valid) {
        console.log("Password incorrect");
        res.status(404).send("Incorrect username or password");
      } else {
        res.status(200).send("User found");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, login };
