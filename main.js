function popup() {
    var txt;
    if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
        txt = "You pressed OK!";
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
        txt = "You pressed Cancel!";
    }
}

setTimeout(function() {
	popup();
}, 10000);

function changeBackground() {
	document.body.style.backgroundColor = "magenta";
}

function changeColorP() {
	var y = document.getElementsByTagName("P");
	var i;
	for (i = 0; i < y.length; i++) {
    	y[i].style.color = "blue";
	}
}
 
var headings = document.querySelectorAll("h1,h2,h3");

function changeColorH() {
	var i;

	for (i = 0; i < headings.length; i++) {
    	headings[i].style.color = "green";
	}
}

function changeFontP() {
	var y = document.getElementsByTagName("P");
	var i;
	for (i = 0; i < y.length; i++) {
    	y[i].style.fontFamily = "papyrus";
	}
}

function changeFontH() {
	var y = document.getElementsByTagName("H1");
	var i;
	for (i = 0; i < y.length; i++) {
    	y[i].style.fontFamily = "Comic Sans";
	}
}

var myButton = document.querySelector('button');

myButton.onclick = function() {
  changeBackground();
  changeColorP();
  changeColorH();
  changeFontP();
  changeFontH();
}