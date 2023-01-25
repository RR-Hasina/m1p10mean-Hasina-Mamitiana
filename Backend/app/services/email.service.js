const nodemailer = require('nodemailer');
const handlebars = require("handlebars");
const path = require("path");

const fs = require('fs');
inlineCss = require('inline-css');


// Create and initialize the email transport object
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c363cd7b0f371c",
      pass: "4a97548484ee2b"
    }
  });

exports.sendEmailReparation = async (req,res) => {
    try {
          //Load the template file
          const templateFile = fs.readFileSync((path.join(__dirname, '..')+"\\templates\\reparationMail\\reparationMail.html"));
          //Load and inline the style
          const templateStyled = await inlineCss(templateFile.toString(), {url:  "file://"+(path.join(__dirname, '..')+"\\templates\\reparationMail\\")});
          //Inject the data in the template and compile the html
          const templateCompiled = handlebars.compile(templateStyled);
          const templateRendered = templateCompiled({user :req.body.user,marque : req.body.marque,imm:req.params.imm});
  
          const emailData = { 
              to: "receiver@example.com", 
              from: '"Example" sender@example.com', 
              subject: "Réparation de la voiture "+req.body.marque+", imm: "+req.params.imm, 
              html: templateRendered 
          };

        //Send the email
        transporter.sendMail(emailData, function(error, info){
            if (error) {
              res.status(500).send(error);
            } else {
              res.status(200).send({message:"Composant mis à jour et Email envoyer"});
            }
          });

        } catch(e){
            console.error(e);
        }      
 }