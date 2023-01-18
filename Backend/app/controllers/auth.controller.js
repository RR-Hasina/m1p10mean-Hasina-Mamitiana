const db = require("../models");
const User = db.user;
const roles = db.ROLES;
require("dotenv/config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role:req.body.role
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "l\'utilisateur a été enregistré!" });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "Utilisateur non trouvé." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Mot de passe incorrect!" });
      }

      var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400, // 24 hours
      });

      if(req.body.role !== user.role){
        return res.status(401).send({ message: "Rôle incorrect!" });
      }
     
      var authoritie =  user.role;

      req.session.token = token;

      res.status(200).send({
        nom: user.nom,
        prenom:user.prenom,
        email: user.email,
        role: authoritie,
      });
    });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "Vous êtes déconnectés!" });
  } catch (err) {
    this.next(err);
  }
};