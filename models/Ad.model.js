const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adSchema = new Schema({
  title: String,
  subject: { type: Schema.Types.ObjectId, ref: "Subject" },
  description: String,
  location: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = model("Ad", adSchema);