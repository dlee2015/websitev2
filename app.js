const express = require('express'),
      app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("index");
})

app.get('/about', function(req, res){
    res.render('about');
})

app.get('/projects', function(req, res){
    res.render('projects');
})

app.listen(process.env.PORT  || 4000);