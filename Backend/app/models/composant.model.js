const mongoose = require("mongoose");

const Composant = mongoose.model(
    "Composant",
    new mongoose.Schema({
        nom: String,
        pieces: []
    })
);
module.exports = Composant;