exports.success = (req, res, msg, status = 200) => {
	console.log('[Response success', msg);
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
