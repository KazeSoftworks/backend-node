const express = require('express');
const router = express.Router();
const response = require('../../network/response');

const controller = require('./controller');

router.get('/', (req, res) => {
	console.log(req.headers);
	// res.header({
	// 	'custom-header': 'Valor personalizado',
	// });
	//res.send('Lista de mensajes');
	response.success(req, res, 'Lista de mensajes');
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
				'Error de mensaje'
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
