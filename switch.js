//Switch, case , break, return statements

function movements(direction){
	var sss;
	switch (direction) {

		case "forward":
		sss="Enter the Maze...";
		break;
		case"back":
		sss="Scared!! Going back Home..";
		break;
		case"left":
		sss="Enter the Garden";
		break;
		case"right":
		sss="See the Riverr..";
		break;
		default:
		sss="Please enter a valid move.";
	}
	return sss;
}

/// in the console user " window.movements("forward"); to see the answer.

///My way as i did it.

function moAlert(direction){

	switch (direction) {

		case "forward":
		alert("Enter the Maze...");
		break;
		case"back":
		alert("Scared!! Going back Home..");
		break;
		case"left":
		alert("Enter the Garden");
		break;
		case"right":
		alert("See the Riverr..");
		break;
		default :alert("Please enter a valid choice");
		alert("Please enter a valid move.");
	}
	//return 0;
}