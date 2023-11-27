var http = require("http"); 
var server=http.createServer((function(req,res){
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("Simple Web Server using Node JS");	
}));
server.listen(3000);
console.log("Server is running at http://localhost:3000");