//by Tofran
function edit() { 
	var entry= document.getElementById("textbox1").value;
	//Remove spaces
	var edit1 = entry.replace(" ", "");
	//Remove  http://
	var edit1 = entry.replace("http://", "");
	//Remove "torrent/"
	var edit2 = edit1.replace("torrent/", "");
	//Add "torrents." and ".torrent"
	var answer = "torrents." + edit2 + ".torrent"

	var textbox2 = document.getElementById('textbox2');
	textbox2.value = answer;

	document.getElementById('copyMe').style.display = "block";
	document.getElementById('arrow').style.display = "block";
} 

function cleanTextBox(){
	document.getElementById("textbox1").value = '';
	document.getElementById("textbox2").value = '';
}

function openlink()
{

var link= document.getElementById("textbox2").value;
var linkToOpen= "http://" + link;
window.open(linkToOpen);
}
