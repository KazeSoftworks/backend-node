const db = require('mongoose');
const Model = require('./model');
const env = require('dotenv').config();

db.Promise = global.Promise;
db.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
console.log('[db] Coneccion de base de datos');

const addMessage = (message) => {
	//list.push(message);
	const myMessage = new Model(message);
	myMessage.save();
};

const getMessages = async () => {
	//return list;
	const messages = await Model.find();
	return messages;
};

const updateText = async (id, message) => {
	const foundMessage = await Model.findOne({
		_id: id,
	});

	foundMessage.message = message;
	const newMessage = await foundMessage.save();
	return newMessage;
};

module.exports = {
	add: addMessage,
	list: getMessages,
	update: updateText,
	//delete
};
