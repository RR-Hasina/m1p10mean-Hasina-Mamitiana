const { authJwt } = require("../middlewares");
const controller = require("../controllers/voiture.controller");
const controller1 = require("../controllers/payement.controller");
const express = require("express");

const router = express.Router();

router.post("/creation", [authJwt.verifyToken], controller.creationVoiture);
router.post("/depot", [authJwt.verifyToken], controller.depotVoiture);
router.post("/findDepot", [authJwt.verifyToken], controller.findDepotVoiture);
router.post("/liste", [authJwt.verifyToken], controller.getListeVoiture);

router.get("/nonPayer", controller1.getListVoituresNonpayer);

router.put("/payement/:imm", controller1.payer);


module.exports = router;