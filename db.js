const db = require('mongoose');
require('dotenv').config();

db.Promise = global.Promise;

const connect = async () => {
	await db.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log('[db] Coneccion de base de datos');
};

module.exports = connect;
