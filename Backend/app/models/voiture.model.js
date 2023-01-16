const mongoose = require("mongoose");

const Voiture = mongoose.model(
  "Voiture",
  new mongoose.Schema({
    Immatriculation: String,
    Marque: String,
    Depots: [{
        _id : false,
        DateDepot: Date,
        DateSortie: Date,
        Signalements: [] //listes noms Composants en String,
    }],
    Reparation: [{
        _id : false,
        DateEntree: Date,
        Composants: [{
            _id : false,
            nom: String,
            DateDebut: { type: Number,default:0},
            DateFin: { type: Number,default:0},
            Pieces: [
                {
                    _id : false,
                    Nom: String,
                    Prix: { type: Number,default:0}
                }
            ]
        }],
        PrixMo: { type: Number,default:0},
        Avancement: { type: Number,default:0},   //pourcentage
        PrixTotal: { type: Number,default:0},
        DatePayement: Date
    }],
    Client:
        { Nom: String, Prenom: String, Email: String }
  })
);

module.exports = Voiture;