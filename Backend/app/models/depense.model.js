const mongoose = require("mongoose");

const Depense = mongoose.model(
  "Depense",
  new mongoose.Schema({
    Info: {
        Motif: String,
        Quantite: Number, //facultatif,
        PrixUnitaire: Number //facultatif
    },
    Montant: Number,
    DateDepense: Date
  })
);

module.exports = Depense;