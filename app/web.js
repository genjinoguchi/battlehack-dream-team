// web.js
var express = require("express");
var logfmt = require("logfmt");
var twilio = require('twilio');
var app = express();

app.set("view options", {layout: false});

app.use(logfmt.requestLogger());

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
    });


app.get("/", function(req, res){
	res.sendfile("./public/index.html");
})

app.post('/sendtext', function(req, res){
	var client = new twilio.RestClient("AC65713b161d8e4fa2be27a4dd77bf5a60", "6c2747b860112eb7770cfe6741f3b727");
 
client.messages.create({
    to:rec.body.phonenumber,
    from:'+19292442978',
    body:'Hello World'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});
});

app.use(express.static(__dirname+'/public/'));


// var connect = require('connect');
// var twilio = require('twilio');
// connect.createServer(
//     connect.static(__dirname + "/public/")
// ).listen(5000);

/*
var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
 
client.messages.create({
    to:'+16512223344',
    from:'TWILIO_NUMBER',
    body:'Hello World'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});
*/