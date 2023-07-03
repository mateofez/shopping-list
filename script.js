var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength() {
	return input.value.length;
}

function removeListItem(event) {
	event.srcElement.parentElement.remove()
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete"))
		ul.appendChild(li);
		li.append(deleteButton)
		deleteButton.addEventListener("click", removeListItem)
		input.value = "";
}	

function addListAfterClick() {
	if (inputlength() > 0 ) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputlength() > 0 && event.code === "Enter") {
		createListElement();
	}
}

function toggleListItem(event){
	event.srcElement.classList.toggle("done")
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleListItem)



// If you click on the list item, it toggles the .done class on and off.
// Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
