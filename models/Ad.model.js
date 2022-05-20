const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  levels: [
    {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
  ],
  experience: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  location: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = model("Ad", adSchema);
