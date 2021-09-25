const express = require('express');
const multer = require('multer');

const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

const upload = multer({ dest: 'uploads/' });

router.post('/', function (req, res) {
	controller
		.addChat(req.body.users)
		.then((data) => {
			response.success(req, res, data, 201);
		})
		.catch((err) => {
			response.error(req, res, 'Internal error', 500, err);
		});
});

router.get('/:userId', (req, res) => {
	controller
		.listChats(req.params.userId)
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch((err) => {
			response.error(req, res, 'Internal error', 500, err);
		});
});

module.exports = router;