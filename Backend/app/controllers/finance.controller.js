const db = require("../models");
const service = require("../services/stat.service");
const depense = db.depense;

exports.financetest = (req, res) => {
    res.status(200).send("finance Content.");
  };

  exports.getStat = async (req, res) => {
    const chimois = await service.getchiAffMois();
    const depmois = await service.getdepenseMois();
    const chian = await service.getchiAffAn();
    const depan = await service.getdepenseAn();
    let statchi = await service.getStatchiffreA();
    let statdep = await service.getStatdepense();
    delete statchi[0]._id;
    delete statdep[0]._id;

    
      //iterate over map2 entries with acc set to map1 at start
      const benefice = Object.entries(statdep[0]).reduce((acc, [key, value]) => 
        // if key is already in map1, add the values, otherwise, create new pair
        ({ ...acc, [key]: (acc[key] || 0) - value })
      , { ...statchi[0] });


    let stat = {
      chiffMois: chimois[0].chiffreAffairesMois,
      chiffAn: chian[0].chiffreAffairesAn,
      depenseMois : depmois[0].totalDepensesMois,
      depenseAn: depan[0].totalDepensesAn,
      statchi: statchi[0],
      statbenefice: benefice

    };
   res.send(stat);
  };