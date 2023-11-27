<html>
<head>validate</head>

<body>
<h2>Enter the Character </h2>

<form input ="submit">
First Name: <input type ="text" id ="fname" placeholder="Enter the First Name"><br>
Last Name: <input type ="text" id ="lname" placeholder="Enter the Last Name"><br>
Age: <input type="number" id="age" placeholder ="Enter the age">
console.log(age)
<br>
<button text= "Submit" onclick=validate()> Submit</button>
</form>

<script type ="text/javascript">
function validate()
{ 
	let fname= document.getElementById("fname").value
	let lname= document.getElementById("lname").value
	let age= document.getElementById("age").value
	var charseq =/^[A-Za-z]+$/;
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