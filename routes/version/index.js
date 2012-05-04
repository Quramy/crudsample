exports.index= function(req, res){
	res.end('this app works on Express');
};

exports.asJson = function(req, res){
	res.send({
		version: '1.0.0',
		description: 'this app works on Express.'
	});
};
