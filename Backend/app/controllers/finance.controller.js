const db = require("../models");
const service = require("../services/stat.services");
const depense = db.depense;

exports.financetest = (req, res) => {
    res.status(200).send("finance Content.");
  };

  exports.getdepense = (req, res) => {
    depense.find((err,depenses)=>{
      if(err){ res.status(500).send(err); }
      else{ res.send(depenses); }
      });
  };

  exports.getStat = async (req, res) => {
    const chimois = await service.getchiAffMois();
    const depmois = await service.getdepenseMois();
    const chian = await service.getchiAffAn();
    const depan = await service.getdepenseAn();

    let stat = {
      chiffMois: chimois,
      chiffAn: chian,
      depenseMois : depmois,
      depenseAn: depan

    };

   res.send(stat);
  };