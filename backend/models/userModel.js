const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {
    username: {
    type: String,
    required: true,
    minlength: [6, 'Too few characters'],
    max: 12
  },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Too few characters'],
      max: 12
    },
    email: {
      type: String,
      required: true,
      minlength: [6, 'Too few characters'],
      max: 12
    },
    score: Number
  }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
