const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required"],
  },
});

module.exports = mongoose.model("users", userSchema);
