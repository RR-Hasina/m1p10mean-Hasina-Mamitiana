const { authJwt } = require("../middlewares");
const controller = require("../controllers/voiture.controller");
const express = require("express");

const router = express.Router();

router.post("/creation", [authJwt.verifyToken], controller.creationVoiture);
router.post("/depot", [authJwt.verifyToken], controller.depotVoiture);

module.exports = router;