const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Projects = require('./models/Projects');

require('dotenv').config();

mongoose
	.connect(process.env.DB_KEY, { useNewUrlParser: true })
	.then(() => console.log('DB Has connected'))
	.catch(err => console.log(err));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/projects', async (req, res) => {
	let allProjects = await Projects.find();

	res.render('projects', {
		projects: allProjects
	});
});

app.get('/projects/:url', async (req, res) => {
	let foundProject = await Projects.findOne({ Url: req.params.url });

	res.render('show', {
		foundProject: foundProject,
		projectList: await Projects.find()
	});
});

app.listen(process.env.PORT || 4000);
