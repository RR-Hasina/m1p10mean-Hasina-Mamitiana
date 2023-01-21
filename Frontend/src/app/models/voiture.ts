export interface Voiture {
    immatriculation: String,
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
        }],
        prixMo?:  number,
    avancement?:  number,   //pourcentage
    prixTotal?:  number,
    datePayement?: Date
    }],
    client: { nom: String, prenom: String, email: String }
}

export interface Payement {
    immatriculation: string,
    marque: string,
    reparation: {
        dateEntree: Date,
        composants: [{
            nom: string,
            dateDebut: number,
            dateFin: number,
            pieces: [{
                nom: string,
                prix: number
            }]
        }],
        prixMo?:  number,
    avancement?:  number,   //pourcentage
    prixTotal?:  number,
    datePayement?: Date
    },
    client: { nom: String, prenom: String, email: String }
}

export interface PayementPage {
    docs: Array<Payement>,
    totalPages: number,
    currentPage: number
}