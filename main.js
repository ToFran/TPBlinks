//by Tofran
function edit() { 
	var entry = document.getElementById("textbox1").value;
	//Remove spaces
	var edit1 = entry.replace(" ", "");
	//Remove  http://
	var edit2 = edit1.replace("http://", "");
	//Remove "torrent/"
	var edit3 = edit2.replace("torrent/", "");
	//Add "http://torrents." and ".torrent"
	var answer = "http://torrents." + edit3 + ".torrent";

	var textbox2 = document.getElementById('textbox2');
	textbox2.value = answer;

	//select text
	document.getElementById('textbox2').select();
	//Display copy me thingy
	document.getElementById('copyMe').style.display = "block";
	document.getElementById('arrow').style.display = "block";
} 

function cleanTextBox(){
	//clean textboxes
	document.getElementById("textbox1").value = '';
	document.getElementById("textbox2").value = '';
	//hide "Copy me!"
	document.getElementById('copyMe').style.display = "none";
	document.getElementById('arrow').style.display = "none";
}

function openlink()
{
var link= document.getElementById("textbox2").value;
// var linkToOpen= "http://" + link;
window.open(link);
}
