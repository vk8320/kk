var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    /* Create Student Table*/
  var sql = "CREATE TABLE student (name VARCHAR(255), Roll_No int,address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
   }); 

    /* Insert Multiple Values*/
  var sql = "INSERT INTO student (name, Roll_No,address) VALUES ?";
  var values = [
    ['Rahul', 1,'Bandra'],
    ['Ravi', 2,'Nashik'],
    ['Savi', 3,'Pune'],
    ['Seeta', 4,'Chinchwad'],
    ['Geeta', 5,'Wakad'],
    ['Sandhya', 6,'Pimpri'],    
  ];
  con.query(sql, [values], function (err, result)
    {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

	 /* Display student data using result object*/
  con.query("SELECT * FROM student ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});