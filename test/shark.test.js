// const Shark = require('../lib/models/shark');
// const assert = require('chai').assert;
// const shark = new Shark();

// describe('Shark data schema :', () => {

// 	it('checks for required "species" data', done => {
// 		shark.species = 'Thresher Shark';
// 		shark.validate(err => {
// 			console.log('err = :', err);
// 			assert.isOk(err, 'species is required data');
// 			done();
// 		});
// 	});

// 	it('checks that "species" data is a String', done => {
// 		shark.species = 7;
// 		shark.validate(err => {
// 			assert.isOk(err, 'shark species data is not a String');
// 			done();
// 		});
// 	});

// 	it('checks for required "range" data', done => {
// 		// const shark = new Shark();
// 		console.log(shark);
// 		shark.range = 'temperate';
// 		console.log(shark);
// 		shark.validate(err => {
// 			assert.isOk(err, 'range is required data');
// 			done();
// 		});
// 	});

// 	it('checks that "range" data is a String', done => {
// 		shark.range = 7;
// 		shark.validate(err => {
// 			assert.isOk(err, 'shark range data is not a String');
// 			done();
// 		});
// 	});

// });