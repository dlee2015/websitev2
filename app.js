const express = require('express'),
      app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");




app.get("/", function(req, res){
    res.redirect("/home");
})

app.get("/home", function(req, res){
    res.render("index");
})



















app.listen(4000);