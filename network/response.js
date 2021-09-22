exports.success = (req, res, msg, status = 200) => {
	res.status(status).send({
		error: '',
		body: msg,
	});
};

exports.error = (req, res, msg, status = 500) => {
	res.status(status).send({
		error: msg,
		body: '',
	});
};
