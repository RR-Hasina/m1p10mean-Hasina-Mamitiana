const db=require("../models");

exports.getListVoituresReparation = (keyword) => {
    return db.voiture.aggregate([
        { $unwind: "$reparation" },
        {$match: { 
            "reparation.avancement" : { $ne: 100} , "reparation.dateSortie" : null,"immatriculation": {$regex:".*(?i)"+keyword+".*"}
            }
         },
        { $sort : { "depots.dateDepot" : 1  } },
         { $project: {depots: 0, "reparation.composants": 0} }
    ]);
   
}



exports.getVoitureReparation = (imm) => {
    return db.voiture.aggregate([
        { $unwind: "$reparation" },
        {$match: { 
            "reparation.avancement" : { $ne: 100} , "reparation.dateSortie" : null,"immatriculation": imm
            }
         }
    ]);
   
}

exports.updateDateDebutrep = (req,res) => {
    if(req.body.dateEntree != null){
        db.voiture.updateOne(
            {immatriculation : req.params.imm},
             { $set: {"reparation.$[reparation].composants.$[composant].dateDebut" :req.body.dateDebut,"reparation.$[reparation].dateEntree":req.body.dateEntree }},
             { arrayFilters: [{ 'reparation.avancement':  { "$ne": 100 }},{ 'composant.nom': req.body.nom  }]}
             ,function(err,updated){
            if(err){
               res.status(500).send(err);
            }else{
               res.json("composant mis à jour");
            }
          });

    }else{
        db.voiture.updateOne(
            {immatriculation : req.params.imm},
             { $set: {"reparation.$[reparation].composants.$[composant].dateDebut" :req.body.dateDebut }},
             { arrayFilters: [{ 'reparation.avancement':  { "$ne": 100 }},{ 'composant.nom': req.body.nom  }]}
             ,function(err,updated){
            if(err){
               res.status(500).send(err);
            }else{
               res.json("composant mis à jour");
            }
          });
    }

}

exports.updateDateFinrep = (req,res) => {
    if(req.body.dateSortie != null){
        db.voiture.updateOne(
            {immatriculation : req.params.imm},
            { $set: {"reparation.$[reparation].composants.$[composant].dateFin" :req.body.dateFin,"reparation.$[reparation].avancement" :req.body.avancement,"reparation.$[reparation].dateSortie":req.body.dateSortie }},
            { arrayFilters: [{ 'reparation.avancement':  { "$ne": 100 }},{ 'composant.nom': req.body.nom }]}
             ,function(err,updated){
          if(err){
             res.status(500).send(err);
          }else{
             res.json("composant mis à jour");
          }
        });

    }
    else{
        db.voiture.updateOne(
            {immatriculation : req.params.imm},
            { $set: {"reparation.$[reparation].composants.$[composant].dateFin" :req.body.dateFin,"reparation.$[reparation].avancement" :req.body.avancement }},
            { arrayFilters: [{ 'reparation.avancement':  { "$ne": 100 }},{ 'composant.nom': req.body.nom }]}
             ,function(err,updated){
          if(err){
             res.status(500).send(err);
          }else{
             res.json("composant mis à jour");
          }
        });

    }
   

}


exports.getListVoituresNovalBon = (keyword) => {
    return db.voiture.aggregate([
        { $unwind: "$reparation" },
        {$match: { 
            "reparation.avancement" : 100 ,"reparation.datePayement":{ $ne: null },"reparation.bonSortie" :  false,"immatriculation": {$regex:".*(?i)"+keyword+".*"}
            }
         },
         { $project: {depots: 0, "reparation.composants": 0} }
    ]);
   
}

exports.validerBonvoiture= (req,res) => {
        db.voiture.updateOne(
            {immatriculation : req.params.imm,"reparation.bonSortie":false,"reparation.datePayement":{ $ne: null },"reparation.avancement" : 100 },
             { $set: {"reparation.$.bonSortie" :true}}
             ,function(err,updated){
            if(err){
               res.status(500).send(err);
            }else{
               res.json("composant mis à jour");
            }
          });
        
}

// db.voitures.updateOne(
//     {immatriculation :'2010TAA'},
//      { $set: {"reparation.$[reparation].composants.$[composant].dateDebut" : new Date()}},
//      { arrayFilters: [{ 'reparation.avancement':  { "$ne": 100 }},{ 'composant.nom': 'frein' }]}

//      )
//      ,function(err,updated){
//     if(err){
//        res.status(500).send(err);
//     }else{
//        res.json("composant mis à jour");
//     }
//   });


// db.voitures.updateOne(
//     {immatriculation : req.params.imm},
//      { $set: {"reparation.$[reparation].composants.$[composant].dateFin" :req.body.dateFin,"reparation.$[reparation].avancement" :req.body.avancement }},
//      { arrayFilters: [{ 'reparation.avancement':  { "$ne": 100 }},{ 'composant.nom': req.body.nom }]})


// db.voitures.aggregate([
//     { $unwind: "$reparation" },
//     {$match: { 
//         "reparation.avancement" : { $ne: 100} , "reparation.dateSortie" : null,"immatriculation": {$regex:".*(?i).*"}
//         }
//      },
//      { $project: {depots: 0, "reparation.composants": 0} }
// ])