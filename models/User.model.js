const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "/images/let-us-travel.jpg",
  },
  role: {
    type: String,
    enum: ["student", "teacher"],
  },
});

module.exports = model("User", userSchema);
