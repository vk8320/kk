var express = require("express"); 
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", function(request, response){    
	response.writeHead(200,{'content-type':'text/html'});
	response.write('<form name="file_input" method="post">');
	response.write('<h1> Select file  </h1> </br> </br>');
	response.write('<input type="file" name="fname"></br></br>');	
	response.write('<input type="submit"><br>');	
	response.write('</form>');
	response.end();	
});
app.post("/", function(req, res){
	const filename = req.body.fname;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("File selected by user is "+filename);
});
app.listen(8080);
console.log("Server is running at http://localhost:8080");