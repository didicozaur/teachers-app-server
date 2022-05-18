const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teacherSchema = new Schema({
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
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  location: String,
  price: {
    type: Number,
    required: true,
  },
});

module.exports = model("Teacher", teacherSchema);
