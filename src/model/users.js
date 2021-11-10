const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
});

const users = mongoose.model("users", userSchema);
module.exports = users;
