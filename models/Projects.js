const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	Title: String,
	About: String,
	Difficulties: String,
	Technologies: String,
	Completed: Boolean
});

module.exports = Projects = mongoose.model('Projects', ProjectSchema);
