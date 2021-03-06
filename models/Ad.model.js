const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = model("Ad", adSchema);
