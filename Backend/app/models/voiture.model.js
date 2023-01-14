const mongoose = require("mongoose");

const Voiture = mongoose.model(
  "Voiture",
  new mongoose.Schema({
    Immatriculation: String,
    Marque: String,
    Depots: [{
        DateDepot: Date,
        DateSortie: Date,
        Signalements: [] //listes noms Composants en String,
    }],
    Reparation: [{
        DateEntree: Date,
        Composants: [{
            nom: String,
            DateDebut: Number,
            DateFin: Number,
            Pieces: [
                {
                    Nom: String,
                    Prix: Number
                }
            ]
        }],
        PrixMo: Number,
        Avancement: Number,   //pourcentage
        PrixTotal: Number,
        DatePayement: Date
    }],
    Client:
        { Nom: String, Prenom: String, Email: String }
  })
);

module.exports = Voiture;