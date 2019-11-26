const mongoose = require("mongoose");

const User = mongoose.model("user", {
  name: {
    type: String,
    required: true
    // required: [true, "name is required"]
  },
  email: {
    type: String,
    required: true
    // required: [true, "email is required"]
  },
  password: {
    type: String,
    required: true
    // required: [true, "name is required"]
  },
  avatar: {
    type: String,
    required: false
  },

  //may or may not keep this
  mobile: {
    type: Number,
    required: true
  }
});

module.exports = User;
