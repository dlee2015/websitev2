const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Projects = require('./models/Projects');

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('DB Has connected'))
	.catch(err => console.log(err));

app.use(express.static('public'));
app.set('view engine', 'ejs');

const newProject = {
	Title: 'Hello World',
	About: 'Bello World'
};

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/projects', function(req, res) {
	res.render('projects');
});

app.listen(process.env.PORT || 4000);
