exports.success = (req, res, msg, status = 200) => {
	res.status(status).send({
		error: '',
		body: msg,
	});
};

exports.error = (req, res, msg, status = 500, details) => {
	console.error('[Response error]', details);
	res.status(status).send({
		error: msg,
		body: '',
	});
};
