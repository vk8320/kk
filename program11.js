var mysql=require("mysql");
var con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"password",
    database:"mcs22"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
var q="select * from customers";
con.query(q,function(err,result,fields){
    if(err)
    throw err;
    console.log(result);
});
q="delete from customers where c_address='pune' ";
con.query(q,function(err,result)
{
    if(err)
    throw err;   
});
console.log("After delet records are");
q="select * from customers ";
con.query(q,function(err,result,fields){
    if(err)
    throw err;
    console.log(result);
});
/////////////////////////////////////////////////////////////////////////////////
var mysql = require('mysql2');
var express=require("express")
var bodyparser=require("body-parser")
var app=new express()
app.use(bodyparser.urlencoded({
    extended:true
}))
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "msc"
});
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/input.html")
})
app.post("/",function(req,res)
{
    var id=req.body.fname
    res.writeHead(200,{'content-type':'text/html'})
    console.log(id)

con.connect(function(err) {

if (err) 
 throw err;
con.query("select * from student",function(err,res)
{
    if(err)
       throw err
    console.log(res)
})
con.query("delete from student where sid='"+id+"'",function(err,result)
{
    if(err)
       throw err
    console.log(result)

console.log("ok")
})
});
})
app.listen(3000)
console.log("server running")

