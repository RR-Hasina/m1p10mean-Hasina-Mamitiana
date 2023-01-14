const db = require("../models");
const Voiture = db.voiture;

exports.creationVoiture = (req, res) => {
    const voiture = new Voiture({
        Immatriculation: req.body.immatriculation,
        Marque: req.body.marque,
        Client: {
            Nom: req.body.nom,
            Prenom: req.body.prenom,
            Email: req.body.email
        }
    });
    voiture.save((err, voiture) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "La voiture a été enregistré" });
    })
};

exports.depotVoiture = (req, res) => {
    Voiture.findOne({
        Immatriculation: req.body.immatriculation,
    })
        .exec((err, voiture) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            var depot = { "DateDepot": Date.now(), "DateSortie": null, "Signalements": req.body.signalement };
            voiture.Depots.push(depot);
            voiture.save();
            res.status(200).send({ message: voiture });
        });
}