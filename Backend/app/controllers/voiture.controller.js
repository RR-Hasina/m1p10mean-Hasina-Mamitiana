const db = require("../models");
const Voiture = db.voiture;
const service = require("../services/voiture.service");

exports.creationVoiture = (req, res) => {
    const voiture = new Voiture({
        immatriculation: req.body.immatriculation,
        marque: req.body.marque,
        client: {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email
        },
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
            var depot = { "dateDepot": Date.now(), "dateSortie": null, "signalements": req.body.signalement, "reparation.avancement": 0 };
            voiture.depots.push(depot);
            voiture.save();
            res.status(200).send({ message: voiture });
        });
}



exports.getListeVoiture = (req, res) => {
    Voiture.find({
        "client.email": req.body.email,
    })
        .exec((err, voiture) => {
            if (err) res.status(500).send({ message: err });
            res.status(200).send(voiture);
        })
}

exports.findDepotVoiture = (req, res) => {
    Voiture.find({
        $expr: {
            $ne: [{
                $arrayElemAt: ["$depots.dateSortie", -1]
            }, null]
        },
        "client.email": req.body.email
    })
        .exec((err, voiture) => {
            if (err) res.status(500).send({ message: err });
            res.send(voiture);
        })
}


exports.getListeVoiturePage = async (req, res) => {
    try{
        const { page = 1, limit = 2, kw="" } = req.query;
        const docs = await service.getListVoiturePage(req,kw).skip((page-1) * limit).limit(limit * 1).exec();
        const count = await service.getListVoiturePage(req,kw).count("count");
        if(count.length == 0)  return res.send();
        res.json({
            docs,
            totalPages: Math.ceil(count[0].count / limit),
            currentPage: parseInt(page)
        });
        }catch(error){
        res.status(500).send({ message: error });
    }

}

