document.addEventListener("DOMContentLoaded", () => {

var userInputElement = document.querySelector(".userInput");
var submitBtnElement = document.querySelector(".submitBtn");
var groceryItemAddElement = document.querySelector(".grocerylist");
var clearItemElement = document.querySelector(".clearItems")

//list

function render () {
 a[0]

 Id =   

}


function addGroceryItem() {

  var groceryParentElement = document.createElement('div');

  var itemElement = document.createElement("p");
  itemElement.innerHTML = userInputElement.value;
  
  var editButtonElement = document.createElement("button");
  editButtonElement.innerHTML = "Edit";
 // editButtonElement.setAttribute("class",edit);
 // var editTextElement = document.createTextNode("Edit");
 // editButtonElement.appendChild(editTextElement);

  var deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerHTML = "Delete";
//  var deleteTextElement = document.createTextNode("Delete");
//  deleteButtonElement.appendChild(deleteTextElement);

  groceryParentElement.appendChild(itemElement);
  groceryParentElement.appendChild(editButtonElement);
  groceryParentElement.appendChild(deleteButtonElement);
  
  groceryItemAddElement.appendChild(groceryParentElement);

}

function resetGroceryItem() {
  userInputElement.value = "";
}

function clearGroceryList() {
  groceryItemAddElement.innerHTML = "";
}


submitBtnElement.addEventListener("click", () => {
  if(userInputElement.value.length>0) {
    addGroceryItem();
    resetGroceryItem();
  }
});

clearItemElement.addEventListener("click", () => {
  clearGroceryList();
});

editButtonElement.addEventListener("click", () => {
  itemElement.contentEditable = true;

});

deleteButtonElement.addEventListener("click", () => {
  groceryParentElement.removeChild(itemElement);
});

});