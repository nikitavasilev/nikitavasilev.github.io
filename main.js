function popup() {
    if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

setTimeout(function() {
	popup();
}, 10000);

let psychedelic = false;
const headings = document.querySelectorAll("h1,h2,h3");
const p = document.getElementsByTagName("P");
const h = document.getElementsByTagName("H1");
let i;

function psycho() {
    if (!psychedelic) {
		document.body.style.backgroundColor = "magenta";
		for (i = 0; i < p.length; i++) {
	   		p[i].style.color = "blue";
	   		p[i].style.fontFamily = "papyrus";
		}
		for (i = 0; i < headings.length; i++) {
	   		headings[i].style.color = "green";
		}
		for (i = 0; i < h.length; i++) {
    		h[i].style.fontFamily = "Comic Sans";
		}
		document.getElementById("psycho").innerHTML = "Disable psychedelic mode";
        psychedelic = true;
    } else {
    	document.body.style.backgroundColor = "";
		for (i = 0; i < p.length; i++) {
	   		p[i].style.color = "";
	   		p[i].style.fontFamily = "";
		}
		for (i = 0; i < headings.length; i++) {
	   		headings[i].style.color = "";
		}
		for (i = 0; i < h.length; i++) {
    		h[i].style.fontFamily = "";
		}
		document.getElementById("psycho").innerHTML = "Enable psychedelic mode";
        psychedelic = false;
    }
}

const myButton = document.querySelector('button');

myButton.onclick = function() {
	psycho();
}