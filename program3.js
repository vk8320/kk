<html>
<head>
<title>Student registration</title>
</head>
<body>
<form input ="submit"> 
Enter the Mail ID: <input type="text" id="mail" placeholder="Enter the Mail ID">
<br><br>
<button onclick =validate()> validate the Details</button>
</form>
<script type="text/javascript">
function validate()
{
	let mail = document.getElementById("mail").value
	var r= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	console.log(mail)
	if(r.test(mail))
	{
		alert("Mail ID is valid")
	}
	else if(mail == "" )
	{
		alert("The field is empty")
	}
	else
	{
		alert("Mail ID is Invalid")
	}
}
</script>
</body>
</html>
