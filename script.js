let favorites = [];
function addItem(){
  let input = document.getElementById("itemInput");
  let value = input.value.trim();
  if (favorites.length >= 5) {
    alert("You can only add 5 favourite things!");
    input.value = "";
    return;
  }
  if (value !== ""){
    favorites.push(value);
    input.value = "";
    displayItems();
  }else {
    alert("Please type something before adding.");
  }
}
function displayItems() {
  let list = document.getElementById("itemList");
  list.innerHTML = "";

  favorites.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.className = "deleteBtn";

    // When clicked, remove item from array
    delBtn.onclick = () => {
      favorites.splice(index, 1); // remove 1 item at current index
      displayItems(); // refresh list
    };

    li.appendChild(delBtn); // Add delete button to list item
    list.appendChild(li);   // Add item to the list
  });
}
