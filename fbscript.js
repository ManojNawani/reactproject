var database =[

{
	username: "manoj",
	password: "password"
}

];

var newsFeed = [
{
	username: "Tim",
	update: "Learning is funn"
}
,

{
	username: "John",
	update: "Un-Ending syllabusss.."
}

]

var userNamePrompter = prompt("Enter Username: ");
var passwordPrompter = prompt("Enter Password: ");


function logIn(name, pass){
if (name === database[0].username &&
	pass === database[0].password)
{
	console.log(newsFeed);

}
	else
	{
	alert("Invalid Username Or Password");
	}
}

logIn(userNamePrompter, passwordPrompter);