var playername = "";
var build = 0;
var header = "";
var culture = "";

function display() {
	//stores relevant info
	playername = document.getElementById("playername").value;
	header = document.getElementById("header").value;
	culture = document.getElementById("culture").value;
	
	//makes things pretty
    document.getElementById('playernameDisplay').innerHTML = playername;
    document.getElementById('headerDisplay').innerHTML = header;
    document.getElementById('cultureDisplay').innerHTML = culture;
}