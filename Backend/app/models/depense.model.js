const mongoose = require("mongoose");

const Depense = mongoose.model(
  "Depense",
  new mongoose.Schema({
    info: {
      motif: String,
      quantite: { type: Number, default: 0 }, //facultatif,
      prixUnitaire: { type: Number, default: 0 } //facultatif
    },
    montant: { type: Number, default: 0 },
    dateDepense: Date
  })
);

module.exports = Depense;