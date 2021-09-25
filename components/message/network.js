const express = require('express');
const multer = require('multer');

const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
	const filterUser = req.query.user || null;

	controller
		.getMessages(filterUser)
		.then((messageList) => {
			response.success(req, res, messageList, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Unexpected Error', 500, e);
		});
});

router.post('/', upload.single('file'), (req, res) => {
	controller
		.addMessage(
			req.body.chat,
			req.body.user,
			req.body.message
		)
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

router.patch('/:id', (req, res) => {
	console.log(req.params.id);

	controller
		.updateMessage(req.params.id, req.body.message)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Error interno', 500, e);
		});
});

router.delete('/:id', (req, res) => {
	controller
		.deleteMessage(req.params.id)
		.then(() => {
			response.success(
				req,
				res,
				`Mensaje ${req.params.id} eliminado`,
				200
			);
		})
		.catch((e) => {
			response.error(req, res, 'Error interno', 500, e);
		});
});

module.exports = router;
