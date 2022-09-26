document.addEventListener('DOMContentLoaded', () => {
  var userInputElement = document.querySelector('.grocery__input');
  var submitBtnElement = document.querySelector('.grocery__submit');
  var groceryItemAddElement = document.querySelector('.grocerylist');
  var clearItemElement = document.querySelector('.grocery__clearitems');
  var deleteButton = document.querySelector('button');

  var list = [];
  var obj = {};
  var id = 1;
  var count = 0;

  function render() {
    obj[id] = userInputElement.value;
    list[count] = obj;
  }

  function addGroceryItem() {
    clearGroceryList();
    var i = 1;
    list.forEach((element) => {
      var groceryParentElement = document.createElement('div');

      var itemElement = document.createElement('p');
      itemElement.innerHTML = element[i];

      var editButtonElement = document.createElement('button');
      editButtonElement.innerHTML = 'Edit';
      editButtonElement.setAttribute('id', i);

      var deleteButtonElement = document.createElement('button');
      deleteButtonElement.innerHTML = 'Delete';
      deleteButtonElement.setAttribute('id', i);

      groceryParentElement.appendChild(itemElement);
      groceryParentElement.appendChild(editButtonElement);
      groceryParentElement.appendChild(deleteButtonElement);
      groceryItemAddElement.appendChild(groceryParentElement);

      i++;
    });

    count++;
    id++;
  }

  function resetGroceryItem() {
    userInputElement.value = '';
  }

  function clearGroceryList() {
    groceryItemAddElement.innerHTML = '';
  }

  submitBtnElement.addEventListener('click', () => {
    if (userInputElement.value.length > 0) {
      render();
      addGroceryItem();
      resetGroceryItem();
    }
  });

  deleteButton.addEventListener('click', (value) => {
    console.log(list[value]);
  });

  clearItemElement.addEventListener('click', () => {
    clearGroceryList();
  });
});
