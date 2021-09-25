const express = require('express');
var app = express();
const server = require('http').Server(app);

const socket = require('./socket');
const db = require('./db');
db();
//const router = require('./components/message/network');
const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
	console.log(
		'La aplicacion esta escuchando en puerto 3000'
	);
});
