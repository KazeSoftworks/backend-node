const express = require('express');
const router = express.Router();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
	res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
	res.send('Añadir mensajes');
});

router.delete('/message', (req, res) => {
	console.log(req.query);
	console.log(req.body);
	res.send('Mensaje borrado');
});

// app.use('/', (req, res) => {
// 	res.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando en puerto 3000');
