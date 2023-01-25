const { authJwt } = require("../middlewares");
const controller = require("../controllers/voiture.controller");
const controller1 = require("../controllers/payement.controller");
const controller2 = require("../controllers/reparation.controller");
const express = require("express");

const router = express.Router();

router.post("/creation", [authJwt.verifyToken], controller.creationVoiture);
router.post("/depot", [authJwt.verifyToken], controller.depotVoiture);
router.post("/findDepot", [authJwt.verifyToken], controller.findDepotVoiture);
router.post("/liste", [authJwt.verifyToken], controller.getListeVoiture);
router.post("/deleteComposant", controller.deleteComposant);
router.get("/nonPayer", controller1.getListVoituresNonpayer);
router.post("/validationAttente", controller.validationAttente);
router.put("/payement/:imm", controller1.payer);

router.get("/reparation", controller2.getListVoituresReparation);

router.get("/:imm/reparation", controller2.getVoitureReparation);

router.put("/:imm/reparation/compDateDebut", controller2.updateDateDebutrep);

router.put("/:imm/reparation/compDatefin", controller2.updateDateFinavrep);

router.get("/bonsortie", controller2.getListVoituresNovalBon);

router.put("/:imm/reparation/validerBon", controller2.validerBonvoiture);

router.get("/:imm/historique", controller2.getListVoituresReparer);

router.get("/:imm/historique/:date", controller2.getListVoituresReparerDetails);



module.exports = router;