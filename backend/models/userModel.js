const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {
    username: String,
    password: String,
    email: String,
    score: Number
  }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
