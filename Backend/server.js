var express = require("express");
const MongoClient = require("mongodb").MongoClient;
var app = express();




app.listen(7000, function () {
    console.log("En écoute sur le port 7000");
});
