const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addUserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    bcrypt: true,
  },
});

addUserSchema.plugin(require("mongoose-bcrypt"));

const users = mongoose.model("users", addUserSchema);
module.exports = users;
