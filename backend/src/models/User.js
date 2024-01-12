const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String,
  state: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", UserSchema);