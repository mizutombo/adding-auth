const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

	species: {
		type: String,
		required: true
	},
	range: {
		type: String,
		required: true
	}

});

const Shark = mongoose.model('Shark', schema);
module.exports = Shark;