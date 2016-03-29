var express = require('express');
var app = express();
var request = require('request');
var parseData = require('./parsedata.js')


app.use(express.static(__dirname + '/../client/'));

app.listen(3000);

var host = 'https://data.sfgov.org/resource/rqzj-sfat.json';

request.get(host, function(err, res, body){
	if(err) { console.error('error in api get: ', err)};
	var data = JSON.parse(body);

	var result = parseData(data);
	console.log('result in server: ', result)

})

