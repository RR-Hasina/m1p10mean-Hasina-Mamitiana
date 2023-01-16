const db = require("../models");
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