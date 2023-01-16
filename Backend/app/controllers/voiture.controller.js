const db = require("../models");
const Voiture = db.voiture;

exports.creationVoiture = (req, res) => {
    const voiture = new Voiture({
        immatriculation: req.body.immatriculation,
        marque: req.body.marque,
        client: {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email
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
        immatriculation: req.body.immatriculation,
    })
        .exec((err, voiture) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            var depot = { "dateDepot": Date.now(), "dateSortie": null, "signalements": req.body.signalement };
            voiture.depots.push(depot);
            voiture.save();
            res.status(200).send({ message: voiture });
        });
}

exports.getVoiture = (req, res) => {
    Voiture.find((err, voiture) => {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.send(voiture);
        }
    });
}