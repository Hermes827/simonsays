const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user: {
    username: {
    type: String,
    required: true,
    minlength: [6, 'Too few characters'],
    maxlength: [20, 'Too many characters']
  },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Too few characters'],
      maxlength: [20, 'Too many characters']
    },
    email: {
      type: String,
      required: true,
      minlength: [6, 'Too few characters']
    },
    score: Number
  }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
