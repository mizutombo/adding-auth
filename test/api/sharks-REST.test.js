const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

process.env.MONGODB_URI = 'mongodb://localhost:27017/sharks-REST-test';
const connection = require('../../lib/connection');
const mongoose = require('mongoose');
const app = require('../../lib/app');

describe('sharks REST HTTP API :', () => {

	before(() => mongoose.connection.dropDatabase());

	const request = chai.request(app);

	const hammerhead_shark = {
		species: 'Hammerhead Shark',
		range: 'sub-tropical'
	};

	let greenland_shark = {
		species: 'Greenland_Shark',
		range: 'arctic'
	};

	it('/GET returns empty array of sharks', () => {
		return request.get('/sharks')
			.then(req => req.body)
			.then(sharks => assert.deepEqual(sharks, []));
	});

	function saveShark(shark) {
		return request.post('/sharks')
			.send(shark)
			.then(res => res.body);
	}

	it('saves a shark', () => {
		return saveShark(hammerhead_shark)
			.then(savedShark => {
				assert.isOk(savedShark._id);
				hammerhead_shark._id = savedShark._id;
				assert.deepEqual(savedShark, hammerhead_shark);
			});
	});

	it('gets saved shark', () => {
		return request.get(`/sharks/${hammerhead_shark._id}`)
			.then(res => {
				assert.deepEqual(res.body, hammerhead_shark);
			});
	});

	it('returns list of sharks', () => {
		return Promise.all([
			saveShark(greenland_shark)
		])
		.then(savedSharks => {
			greenland_shark = savedSharks[0];
		})
		.then(() => request.get('/sharks'))
		.then(res => {
			const sharks = res.body;
			assert.deepEqual(sharks, [hammerhead_shark, greenland_shark]);
		});
	});	


});