const express = require('express');
const response = require('./network/response');
const router = express.Router();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
	console.log(req.headers);
	// res.header({
	// 	'custom-header': 'Valor personalizado',
	// });
	//res.send('Lista de mensajes');
	response.success(req, res, 'Lista de mensajes');
});

router.post('/message', (req, res) => {
	// res
	// 	.status(201)
	// 	.send({ error: '', body: 'Creado correctamente' });
	if (req.query.error == 'ok') {
		response.error(
			req,
			res,
			'Error inesperado',
			500,
			'Es una simulacion de errores'
		);
	} else {
		response.success(req, res, 'Creado correctamente', 201);
	}
});

router.delete('/message', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	res.status(200).send({
		error: '',
		body: 'Mensaje borrado correctamente',
	});
});

// app.use('/', (req, res) => {
// 	res.send('Hola');
// });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en puerto 3000');
