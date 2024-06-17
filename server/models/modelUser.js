const mongoose = require("mongoose");

const addUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});
