var express = require('express');
var http  = require('http');
var path = require('path');
var config = require('./config');
var HttpError = require('error').HttpError;
var routes = require('./routes/index');
var photos  = require('./routes/photos');
var articles  = require('./routes/articles');


var app = express();
app.set('port', config.get('port'));
app.use(express.static(path.join(__dirname, 'public')));

// routing
app.use('/', routes);
app.use('/articles', articles);
app.use('/photos', photos);

// error handler
app.use(require('middleware/sendHttpError'));

app.use(function(err, req, res, next){
	if (typeof err == 'number'){
		err = new HttpError(err);
	}

	if (err instanceof HttpError){
		res.sendHttpError(err);
	} else {
		if (app.get('env') == 'development'){
			express.errorHandler(err, req, res, next);
		} else {
			err = new HttpError(500);
			res.sendHttpError(err);
		}
	}

});

app.use(function(res, req){
	res.send(404, "Page	 not found");
});

