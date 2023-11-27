var express = require("express"); 
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get("/", function(request, response){    
	response.sendFile(__dirname + "/program13_login_index.html"); 
});
app.post("/", function(req, res){
	var user = req.body.username;
	var pass = req.body.password;		
        res.writeHead(200, { 'Content-Type': 'text/html' });
	if(user==pass){
		res.write("Login Successful");
	}
	else{
		res.write("Login Unsuccessful");
	}	
});
app.listen(8080);
console.log("Server is running at http://localhost:8080");