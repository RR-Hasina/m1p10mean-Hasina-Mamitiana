const { voiture } = require("../models");
const db = require("../models");
const Voiture = db.voiture;

exports.getVoitureDiagnostique = (req, res) => {
  Voiture.find({
    $expr: {
      $and: [
        {
          $ne: [{
            $arrayElemAt: ["$depots.dateSortie", -1]
          }, null]
        },
        {
          $ne: [{
            $arrayElemAt: ["$reparation.dateEntree", -1]
          }, null]
        }
      ]
    }
  })
    .exec((err, voiture) => {
      if (err) res.status(500).send({ message: err });
      res.status(200).send(voiture);
    });
}

exports.diagnostique = (req, res) => {
  Voiture.findOne({
    immatriculation: req.body.immatriculation,
  })
    .exec((err, voiture) => {
        if (err) res.status(500).send({ message: err });
        var reparation = {
          "dateEntree": null,
          "dateSortie": null,
          "composants": req.body.composant,
          "prixMo": req.body.prixMo,
          "avancement": null,
          "prixTotal": null,
          "datePayement": null
        };
        voiture.depots.push(reparation);
        voiture.save();
        res.status(200).send({ message: voiture });
    })
  
}