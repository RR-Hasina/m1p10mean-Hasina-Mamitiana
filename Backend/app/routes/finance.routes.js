const { authJwt } = require("../middlewares");
const controller = require("../controllers/finance.controller");
const express = require("express");


const router = express.Router();

router.get("/testa", [authJwt.verifyToken], controller.financetest);

module.exports = router;