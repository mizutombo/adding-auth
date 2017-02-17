const express = require('express');
const Router = express.Router;
const router = Router();
const Shark = require('../models/shark');
const bodyParser = require('body-parser').json();
const ensureRole = require('../auth/ensure-role');

router

	.get('/', (req, res, next) => {
		const query = {};
		if (req.query.type) {
			query.type = req.query.type;
		}
		Shark.find(query)
			.then(sharks => res.send(sharks))
			.catch(next);
	})

	.get('/:id', (req, res, next) => {
		Shark.findById(req.params.id)
			.then(shark => {
				if (!shark) {
					res.status(404).send({ error: `Id ${req.params.id} Not Found`});
				}
				else {
					res.send(shark);
				}
			})
			.catch(next);
	})

	.post('/', bodyParser, (req, res, next) => {
		new Shark(req.body).save()
			.then(shark => res.send(shark))
			.catch(next);
	})

	.put('/:id', bodyParser, (req, res, next) => {
		return Shark.findByIdAndUpdate(
			req.params.id,
			req.body
		)
		.then(shark => {
			res.send(shark);
		})
		.catch(next);
	})

	.delete('/:id', (req, res, next) => {
		Shark.findByIdAndRemove(req.params.id)
			.then(deleted => {
				res.send({deleted: !!deleted});
			})
			.catch(next);
	});

module.exports = router;