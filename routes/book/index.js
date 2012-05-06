var mongoose = require('mongoose');

exports.index = function(req, res){
	var BookSchema = mongoose.model('book');
	BookSchema.find({}, ['_id', 'title', 'author'], function(err, docs){
		if(!err){
			res.render('book',{
				title: 'books',
				books: docs
			});
		}else{
			res.render('book',{
				title: 'books',
				error: err
			});
		}
	});
};

exports.findById = function(req, res){
	var BookSchema = mongoose.model('book');
	BookSchema.findById(req.params.id, function(err, doc){
		if(!err){
			if(!doc || !doc._id){
				res.send(404);
			}else{
				res.json(doc);
			}
		}else{
			res.send(err);
		}
	});
};

exports.asJson = function(req, res){
	var BookSchema = mongoose.model('book');
	var ids=[];
	BookSchema.find({}, function(err, docs){
		if(!err){
			res.json(docs);
		}else{
			res.send(err);
		}
	});
};

exports.create = function(req, res){
	var BookSchema = mongoose.model('book');
	var book = new BookSchema();
	book.author = req.body.author;
	book.title = req.body.title;
	book.description = req.body.description;
	book.save(function(err){
		if(!err){
			res.json(book);
		}else{
			res.send(err);
		}
	});
};

exports.update = function(req, res){
	var BookSchema = mongoose.model('book');
	BookSchema.findById(req.params.id, function(err, book){
		book.author = req.body.newAuthor;
		book.title = req.body.newTitle;
		book.description = req.body.newDesc;
		book.save(function(err){
			if(!err){
				res.json(book);
			}else{
				res.send(err);
			}
		});
	});
};

exports.delete = function(req, res){
	var BookSchema = mongoose.model('book');
	BookSchema.remove({_id:req.params.id},function(err){
		if(!err){
			res.end('success');
		}else{
			res.send(err);
		}
	});
};

var findById = function(id){
	var BookSchema = mongoose.model('book');
	BookSchema.findById(id, function(err, doc){
	});
};

