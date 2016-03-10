var path = require('path');
var util = require('util');
var http = require('http');

function(statis, message){
	Error.apply(this, arguments);
	Error.captureStackTrace(this, HttpError);

	this.status = status;
	this.message = message || http.STATS_CODES[status] || "Error";
}

util.inherits(HttpError, Error);

HttpError.prototype.name = "HttpError";

exports.HttpError = HttpError;