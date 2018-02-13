function addNewList() {
    var list = document.getElementById("grocery-list");
    var itemInput = document.getElementById("new-list-item");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

