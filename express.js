var express = require('express')
  , http = require('http')
  , path = require('path')
  , app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/build/index.html');
});

var server = http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port 3000");
});

module.exports = app;