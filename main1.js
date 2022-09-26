document.addEventListener('DOMContentLoaded', () => {
  const userInputElement = document.querySelector('.grocery__input');
  const submitBtnElement = document.querySelector('.grocery__submit');
  const groceryListElement = document.querySelector('.grocery__list');
  const clearItemElement = document.querySelector('.grocery__clearitems');

  const groceryList = [];
  let id = 0;

  function renderGroceryList(newList) {
    const listContainerElement = document.createElement('div');
    const todoTextElement = document.createElement('p');
    const editButtonElement = document.createElement('button');
    editButtonElement.textContent = 'edit';
    editButtonElement.setAttribute('data-id', newList.id);
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.setAttribute('data-id', newList.id);
    deleteButtonElement.textContent = 'delete';

    listContainerElement.setAttribute('class', 'grocery__item');
    todoTextElement.textContent = newList.text;

    listContainerElement.appendChild(todoTextElement);
    listContainerElement.appendChild(editButtonElement);
    listContainerElement.appendChild(deleteButtonElement);
    groceryListElement.appendChild(listContainerElement);
  }

  function addGroceryList() {
    if (userInputElement.value.length) {
      const newList = { id: ++id, text: userInputElement.value };
      groceryList.push(newList);
      renderGroceryList(newList);
    }

    console.log(groceryList);
  }

  function clearGroceryList() {}

  function init() {
    submitBtnElement.addEventListener('click', addGroceryList);
    clearItemElement.addEventListener('click', clearGroceryList);
  }

  init();
});
