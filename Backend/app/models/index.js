const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.voiture = require("./voiture.model");
db.depense = require("./depense.model");

db.ROLES = ["client", "atelier", "finance"];

module.exports = db;