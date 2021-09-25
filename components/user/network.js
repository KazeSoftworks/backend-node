const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
	controller
		.addUser(req.body.name)
		.then((data) => {
			response.success(req, res, data, 201);
		})
		.catch((e) => {
			response.error(req, res, 'Internal error', 500, err);
		});
});

router.get('/', (req, res) => {
	controller
		.getUsers()
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Internal Error', 500, e);
		});
});

module.exports = router;
