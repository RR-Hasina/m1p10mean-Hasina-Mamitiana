const { authJwt } = require("../middlewares");
const controller = require("../controllers/atelier.controller");
const express = require("express");


const router = express.Router();

router.get("/testa", [authJwt.verifyToken], controller.ateliertest);

module.exports = router;