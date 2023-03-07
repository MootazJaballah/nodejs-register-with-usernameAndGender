const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  gender: { type: Number, required: true },
  niveau: { type: [Number], default: [1] },
});

module.exports = mongoose.model("user", userSchema);
