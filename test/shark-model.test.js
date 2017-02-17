const Shark = require('../lib/models/shark');
const testInvalid = require('./test-invalid')(Shark);

describe('shark model test :', () => {

	it('requires a species', () => {
		return testInvalid({ range: 'range' });
	});

	it('requires a range', () => {
		return testInvalid({ species: 'species' });
	});

	it('is valid with species and range', () => {
		return new Shark({ species: 'species', range: 'range' }).validate();
	});
});