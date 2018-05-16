
var state = false;

function changeState() {
	if (state) {
		document.getElementById('page').style.background = "white";
		document.getElementById('page').style.color = "black";
		document.getElementById('buttonChange').innerHTML = "Light";
		
		state = false;
	} else {
		document.getElementById('page').style.background = "gray";
		document.getElementById('page').style.color = "white";
		document.getElementById('buttonChange').innerHTML = "Dark";
		state = true;
	}
}
