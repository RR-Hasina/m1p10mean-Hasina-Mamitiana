const db=require("../models");


exports.getchiAffMois = () => {
   return  db.voiture.aggregate([
        { $unwind: "$Reparation" },
        {"$match": { 
                "$expr": { 
                    "$eq": [ 
                        {$month: "$Reparation.DatePayement" }, 
                       {$month: new Date()} 
                    ] 
                } 
            }
         },
          {
           $group: {
              _id: null,
               ChiffreAffairesMois: { $sum: "$Reparation.Prixtotal" }
            }
          }
    ]);
 }


 exports.getchiAffAn = () => {
    return  db.voiture.aggregate([
        { $unwind: "$Reparation" },
        {"$match": { 
                "$expr": { 
                    "$eq": [ 
                        {$year: "$Reparation.DatePayement" }, 
                       {$year: new Date()} 
                    ] 
                } 
            }
         },
          {
           $group: {
              _id: null,
               ChiffreAffairesAn: { $sum: "$Reparation.Prixtotal" }
            }
          }
    ]);
 }


 exports.getdepenseMois = () => {
    return  db.depense.aggregate([
        {"$match": { 
            "$expr": { 
                "$eq": [ 
                    {$month: "$DateDepense" }, 
                   {$month: new Date()} 
                ] 
            } 
        }
     },
      {
        $group: {
          _id: null,
          totalDepensesMois: { $sum: '$Montant' }
        }
      }
    ]);
 }


 exports.getdepenseAn = () => {
    return  db.depense.aggregate([
        {"$match": { 
            "$expr": { 
                "$eq": [ 
                    {$year: "$DateDepense" }, 
                   {$month: new Date()} 
                ] 
            } 
        }
     },
      {
        $group: {
          _id: null,
          totalDepensesAn: { $sum: '$Montant' }
        }
      }
    ]);
 }

     