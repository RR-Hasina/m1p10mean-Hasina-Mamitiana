const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    role : String
  })
);

module.exports = User;