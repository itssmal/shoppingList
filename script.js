var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var listItem = document.querySelectorAll("li");

//every second li dark
// for (var b = 0; b < listItem.length; b++) {
// 	if (b % 2 != 0 ) {
// 		listItem[b].className += "darkItem";
// 	}
// }

//add event listener for buttons
for (var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click",removeParent,false);
}

function removeParent(evt) {
	evt.target.removeEventListener("click",removeParent,false);
	evt.target.parentNode.remove();
}

//changing li style on click
function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete!";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

