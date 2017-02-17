const User = require('../lib/models/user');
const testInvalid = require('./test-invalid')(User);
const assert = require('chai').assert;

describe('tests user model :', () => {

	it('requires a username', () => {
		return testInvalid({ password: 'halibut' });
	});

	it('requires a hash via password', () => {
		return testInvalid({ username: 'username' });
	});

	it('is valid with username and password', () => {
		return new User({ username: 'username', password: 'halibut' }).validate();
	});

	it('sets has from password and correctly compares', () => {
		const data = { username: 'username', password: 'halibut' };
		const user = new User(data);

		assert.isUndefined(user.password);
		assert.notEqual(user.hash, data.password);

		assert.isTrue(user.comparePassword('halibut'));
		assert.isFalse(user.comparePassword('not the password'));
	});

});

