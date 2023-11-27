var express = require("express"); 
const bodyParser = require("body-parser");
var fs = require("fs"); 
var buf = new Buffer(1024); 
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", function(request, response){    
	response.writeHead(200,{'content-type':'text/html'});
	response.write('<form name="file_input" method="post">');
	response.write('<h1> Select file to view contents of it  </h1>');
	response.write('<input type="file" name="fname"><br>');	
	response.write('<input type="submit"><br>');	
	response.write('</form>');
	response.end();	
});

app.post('/', function(req, res){
	
	const fn = req.body.fname;	
	fs.open(fn, 'r+', function(err, fd) { 
	if (err)
		return res.status(400).send({message: "File not found error"});
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){ 
	if (err)
		console.log(err); 
	var data =buf.toString();  
	res.writeHead(200,{'content-type':'text/html'});	
	res.write(data);
	});
    });
});
app.listen(8080);
console.log("Server is running at http://localhost:8080");