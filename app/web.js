// // web.js
// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();

// app.set("view options", {layout: false});

// app.use(logfmt.requestLogger());

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
// 	console.log("Listening on " + port);
//     });


// app.get("/", function(req, res){
// 	res.sendFile("./public/index.html");
// })

// app.use(express.static(__dirname+'/public/'));


var connect = require('connect');
connect.createServer(
    connect.static(__dirname + "/public/")
).listen(5000);