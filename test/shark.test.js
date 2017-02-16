const Shark = require('../lib/models/shark');
const assert = require('chai').assert;
const shark = new Shark();

describe('Shark data schema :', () => {

	it('checks for required "species" data', done => {
		shark.species = 'Thresher Shark';
		shark.validate(err => {
			assert.isOk(err, 'shark "species" is required data');
			done();
		});
	});

	it('checks that "species" data is a String', done => {
		shark.species = 7;
		shark.validate(err => {
			assert.isOk(err, 'shark "species" data is a String');
			done();
		});
	});

	it('checks for required "range" data', done => {
		shark.range = 'temperate';
		shark.validate(err => {
			assert.isOk(err, 'shark "range" is required data');
			done();
		});
	});

	it('checks that "range" data is a String', done => {
		shark.range = 7;
		shark.validate(err => {
			assert.isOk(err, 'shark "range" data is a String');
			done();
		});
	});

});