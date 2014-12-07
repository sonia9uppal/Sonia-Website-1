var http = require ("http");
var express = require ("express");
var app = express();
var port = process.env.PORT || 5000;
//app.get("/",function(req, res){

 // });
app.use(express.static(__dirname+"/public"));
var server = http.createServer(app);
server.listen(port);

