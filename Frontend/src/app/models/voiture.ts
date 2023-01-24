export interface Voiture {
    immatriculation: String,
    marque: String,
    depots: [{
        dateDepot: Date,
        dateSortie: Date,
        signalements: [],
        validation: Number
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
        prixMo?: number,
        avancement?: number,   //pourcentage
        prixTotal?: number,
        datePayement?: Date,
        bonSortie?: boolean
    }],
    client: { nom: String, prenom: String, email: String }
}

export interface Reparation {
    immatriculation: string,
    marque: string,
    reparation?: {
        dateEntree: Date | null,
        dateSortie: Date | null,
        composants?: [{
            nom: string,
            dateDebut: Date,
            dateFin: Date | null,
            pieces: [{
                nom: string,
                prix: number
            }]
        }],
        prixMo?: number,
        avancement?: number,   //pourcentage
        prixTotal?: number,
        datePayement?: Date,
        bonSortie?: boolean
    },
    client: { nom: String, prenom: String, email: String }
}

export interface ReparationPage {
    docs: Array<Reparation>,
    totalPages: number,
    currentPage: number
}