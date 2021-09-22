const express = require('express');
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
	res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
	res
		.status(201)
		.send({ error: '', body: 'Creado correctamente' });
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

app.listen(3000);
console.log('La aplicacion esta escuchando en puerto 3000');
