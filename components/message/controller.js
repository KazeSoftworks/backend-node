const { socket } = require('../../socket');
const store = require('./store');

const addMessage = (chat, user, message, file) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error(
				'[messageController] No hay usuario o mensaje'
			);
			return reject('Los datos son incorrectos');
		}

		let fileUrl = '';
		if (file) {
			fileUrl = `http://localhost:3000/app/uploads/${file.filename}`;
		}

		const fullMessage = {
			chat: chat,
			user: user,
			message: message,
			date: new Date(),
			file: fileUrl,
		};
		store.add(fullMessage);

		socket.io.emit('message', fullMessage);
		return resolve(fullMessage);
	});
};

const getMessages = (filterUser) => {
	return new Promise((resolve, reject) => {
		resolve(store.list(filterUser));
	});
};

const updateMessage = (id, message) => {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			return reject('Los datos son invalidos');
		}
		const result = await store.update(id, message);
		resolve(result);
	});
};

const deleteMessage = (id) => {
	return new Promise(async (resolve, reject) => {
		if (!id) {
			return reject('Parametros invalidos');
		}
		store
			.remove(id)
			.then(() => {
				return resolve('Removido exitosamente');
			})
			.catch((e) => {
				reject(e);
			});
	});
};

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage,
};
