export interface Voiture {
    Immatriculation: String,
    marque: String,
    depots: [{
        dateDepot: Date,
        dateSortie: Date,
        signalements: []
    }],
    reparation: [{
        dateEntree: Date,
        composants: [{
            nom: String,
            dateDebut: Number,
            dateFin: Number,
            pieces: [{
                nom: String,
                prix: Number
            }]
        }]
    }],
    client: { nom: String, prenom: String, email: String }
}