const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subjectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  img: {
    type: String,
    default: "/images/let-us-travel.jpg",
  },
});

module.exports = model("Subject", subjectSchema);
