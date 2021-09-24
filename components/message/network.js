const express = require('express');
const router = express.Router();
const response = require('../../network/response');

const controller = require('./controller');

router.get('/', (req, res) => {
	controller
		.getMessages()
		.then((messageList) => {
			response.success(req, res, messageList, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Unexpected Error', 500, e);
		});
});

router.post('/', (req, res) => {
	controller
		.addMessage(req.body.user, req.body.message)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201);
		})
		.catch((e) => {
			response.error(
				req,
				res,
				'Información Invalidad',
				400,
				e
			);
		});
});

router.delete('/', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	res.status(200).send({
		error: '',
		body: 'Mensaje borrado correctamente',
	});
});

module.exports = router;
