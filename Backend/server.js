var express = require("express");
var app = express();


app.get("/",(req,resp)=>{
   resp.send("gg");
});

app.listen(7000, function () {
    console.log("En écoute sur le port 7000");
});
