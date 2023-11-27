var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', function(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write('<form name="file_download" method="post">');
	res.write('<h3> Click the button to download the file "download.txt"  </h3>');
	res.write('<input type="file" name="fname"><br>');	
	res.write('<input type="submit"><br>');	
	res.write('</form>');
	res.end();    
});
  
app.post('/', function(req, res){
	const fn = req.body.fname;
	res.download(fn);
});
app.listen(3000);