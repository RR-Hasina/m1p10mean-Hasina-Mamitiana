const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Echec!l\'email est déjà utilisé" });
        return;
      }

      next();
    });
};


const inscription = {
  checkDuplicateEmail,
};

module.exports = inscription;