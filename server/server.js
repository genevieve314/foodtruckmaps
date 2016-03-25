var express = require('express');
var app = express();
var request = require('request');


app.use(express.static(__dirname + '/../client/'));

app.listen(3000);

var host = 'https://data.sfgov.org/resource/rqzj-sfat.json';

request.get(host, function(err, res, body){
	console.log('res body in app.post to api: ', body);
})

