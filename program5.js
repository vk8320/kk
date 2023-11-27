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
	response.write('<h1> Select 2 files to append File1 Contents to File2  </h1>');
	response.write('<input type="file" name="file1"><br>');
	response.write('<input type="file" name="file2"><br>');
	response.write('<input type="submit"><br>');	
	response.write('</form>');
	response.end();	
});

app.post('/', (req, res) => {
	const file1 = req.body.file1;
	const file2 = req.body.file2;	
	fs.open(file1, 'r+', function(err, fd) { 
	if (err) { 
		return console.error(err); 
	} 
	console.log("File open successfully");	 	
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){ 
	if (err){ 
		console.log(err); 
	}	
	var data =buf.toString();  
	fs.appendFile(file2, data, (err) => { 
  	if (err) { 
    		console.log(err); 
  	}	 
 	 else {  		  
  	  console.log("\nFile Contents are appended successfully"); 
	res.write('File 1 contents are appended in file 2');
	 } 
	}); 
	});
	});
	res.end();
})
app.listen(8080);
console.log("Server is running at http://localhost:8080");