<html>
<head>Employee</head>

<body>
<h2>Enter the Details </h2>

<form input ="submit">
Date Of Birth: <input type ="text" id ="DOB" placeholder="Enter the DOB"><br>
Date Of Joining: <input type ="text" id ="DOJ" placeholder="Enter the Joining Date"><br>
Salary: <input type="text" id="sal" placeholder ="Enter the sal">
<br>
<button text= "Submit" onclick=validate()> Submit</button>
</form>

<script type ="text/javascript">
function validate()
{ 
	var dateformat=/^[A-Za-z]+$/;
	if(charseq.test(fname) && charseq.test(lname) && age>=18  && age<=50)
	{
		alert("The Data is Correct")
	}else if(fname == null && lname== null && age == null)
	{
		alert("The textbox is Empty")
	}else
	{
		alert("Enter the valid Details")
	}
}
</script>
</body>
</html>