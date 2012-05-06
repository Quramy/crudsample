
/*
 * GET home page.
 */

exports.index = function(req, res){
	var getArr=function(){
		return ['hoge', 'foo', 'bar', 'biz'];
	};

	var arr=getArr();

  res.render('index', { 
		title: 'Hello, world',
	 	message:'hogehogehoge',
		arr: arr
	});
};

exports.version = require('./version');
exports.book = require('./book');
