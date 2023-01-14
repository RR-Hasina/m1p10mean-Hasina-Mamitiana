const { authJwt } = require("../middlewares");
const controller = require("../controllers/client.controller");
const express = require("express");


const router = express.Router();

router.get("/testa", [authJwt.verifyToken], controller.clienttest);

module.exports = router;