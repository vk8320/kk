var http = require('http');
var fs = require("fs");

http.createServer(function(request, response) {
fs.readFile("program16_webpage.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
}); 
}).listen(3000);