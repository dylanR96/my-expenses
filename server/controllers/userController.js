const users = require("../models/modelUser.js");

const signUp = async (req, res, next) => {
  const { email, username, password } = req.body;
  try {
    const newUser = new users({
      email: email,
      username: username,
      password: password,
    });
    const foundEmail = await users.findOne({ email: email });
    const foundUsername = await users.findOne({ username: username });

    if (foundEmail) {
      console.log("Failed to create user!");
      res.status(404).send({ message: "Email is already registered!" });
    } else if (foundUsername) {
      console.log("Failed to create user!");
      res.status(404).send({ message: "Username already exists!" });
    } else {
      await newUser.save();
      res.status(200).send("User was created");
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const foundData = await users.findOne({ username: username });
    if (!foundData) {
      res.status(404).send({ message: "User not found" });
    }
    foundData.verifyPassword(password, (err, valid) => {
      if (!valid) {
        console.log("Password incorrect");
        res.status(404).send({ message: "Incorrect username or password" });
      } else {
        res.status(200).send("User found");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, login };
