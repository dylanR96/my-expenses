const mongoose = require("mongoose");

const addUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const addUserModel = mongoose.model("users", addUserSchema);
module.exports = addUserModel;
