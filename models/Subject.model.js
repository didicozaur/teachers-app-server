const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subjectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  img: {
    type: String,
    default: "/images/learn-today.jpeg",
  },
});

module.exports = model("Subject", subjectSchema);
