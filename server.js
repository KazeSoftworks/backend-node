const express = require('express');

var app = express();

//const router = require('./components/message/network');
const router = require('./network/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en puerto 3000');
