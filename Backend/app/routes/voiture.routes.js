const { authJwt } = require("../middlewares");
const controller = require("../controllers/voiture.controller");
const express = require("express");

const router = express.Router();

router.post("/creation", [authJwt.verifyToken], controller.creationVoiture);
router.post("/depot", [authJwt.verifyToken], controller.depotVoiture);
router.get("/get", [authJwt.verifyToken], controller.getVoiture);
router.post("/findDepot", [authJwt.verifyToken], controller.findDepotVoiture);

module.exports = router;