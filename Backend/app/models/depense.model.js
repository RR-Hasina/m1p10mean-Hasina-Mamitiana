const mongoose = require("mongoose");

const Depense = mongoose.model(
  "Depense",
  new mongoose.Schema({
    Info: {
        Motif: String,
        Quantite: Number, //facultatif,
        PrixUnitaire: Number,default:0 //facultatif
    },
    Montant: { type: Number,default:0},
    DateDepense: Date
  })
);

module.exports = Depense;