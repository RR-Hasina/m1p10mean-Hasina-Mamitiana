const { authJwt } = require("../middlewares");
const controller = require("../controllers/finance.controller");
const express = require("express");


const router = express.Router();

router.get("/testa", controller.getdepense);

module.exports = router;