
/**
 * Module dependencies.
 */

var express = require('express'),
  	routes = require('./routes'),
		mongoose = require('mongoose');

var app = module.exports = express.createServer();


//mongodb settings
var mongoUri = process.env.MONGOHQ_URL || 'mongodb://localhost/sampledb';
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var BookSchema= new Schema({
	title: String,
	author: String
});

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
	//mongodb
	mongoose.connect(mongoUri);
	mongoose.model('book', BookSchema);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});





// Routes

app.get('/', routes.index);
app.get('/version', routes.version.index);
app.get('/version/json', routes.version.asJson);

app.get('/sample', function(req, res){
	var BookSchema = mongoose.model('book');
	BookSchema.find({}, function(err, docs){
		if(!err){
			res.json(docs);
		}
	});
});

app.get('/sample/post', function(req, res){
	var BookSchema = mongoose.model('book');
	var book = new BookSchema;
	book.title = 'HOGE';
	book.author = 'YOSUKE';
	book.save(function(err){
		if(!err){
			res.end('success!');
		}else{
			res.send(err);
		}
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
