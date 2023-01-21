const db=require("../models");

exports.getListVoituresNonpayer = (keyword) => {
    return db.voiture.aggregate([
        { $unwind: "$reparation" },
        {$match: { 
            "reparation.datePayement" : null,"reparation.avancement" : 100, "client.email": {$regex:".*(?i)"+keyword+".*"}
            }
         },
         { $project: {depots: 0} }
        ]);
}


exports.payer = (req,res) => {
     return db.voiture.updateOne({immatriculation : req.params.imm, "reparation.avancement" : 100,"reparation.datePayement" : null}, { $set: {"reparation.$.datePayement" : new Date()}},function(err,updated){
        if(err){
           res.status(500).send(err);
        }else{
           res.json("Payement validé");
        }
      });;

}

