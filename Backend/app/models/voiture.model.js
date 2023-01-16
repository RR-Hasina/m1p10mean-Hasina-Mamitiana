const mongoose = require("mongoose");

const Voiture = mongoose.model(
    "Voiture",
    new mongoose.Schema({
        immatriculation: String,
        marque: String,
        depots: [{
            _id: false,
            dateDepot: Date,
            dateSortie: Date,
            signalements: [] //listes noms Composants en String,
        }],
        reparation: [{
            _id: false,
            dateEntree: Date,
            composants: [{
                _id: false,
                nom: String,
                dateDebut: { type: Number, default: 0 },
                dateFin: { type: Number, default: 0 },
                pieces: [
                    {
                        _id: false,
                        nom: String,
                        prix: { type: Number, default: 0 }
                    }
                ]
            }],
            prixMo: { type: Number, default: 0 },
            avancement: { type: Number, default: 0 },   //pourcentage
            prixTotal: { type: Number, default: 0 },
            datePayement: Date
        }],
        client:
            { nom: String, nrenom: String, email: String }
    })
);

module.exports = Voiture;