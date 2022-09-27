document.addEventListener('DOMContentLoaded', () => {
  const userInputElement = document.querySelector('.grocery__input');
  const submitBtnElement = document.querySelector('.grocery__submit');
  const groceryListElement = document.querySelector('.grocery__list');
  const clearItemElement = document.querySelector('.grocery__clearitems');
  const groceryFormElement = document.querySelector('.grocery__form');

  let groceryList = [];
  let id = 0;

  function renderGroceryList(newList) {
    const listContainerElement = document.createElement('div');
    const todoTextElement = document.createElement('p');

    const editButtonElement = document.createElement('button');
    editButtonElement.textContent = 'edit';
    const deleteButtonElement = document.createElement('button');    
    deleteButtonElement.textContent = 'delete';

    editButtonElement.setAttribute('data-listid', newList.id);
    deleteButtonElement.setAttribute('data-listid', newList.id);

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
      userInputElement.value = '';
    }
  }

  function clearGroceryList() {
    groceryList = [];
    Array.from(groceryListElement.children).forEach((element) => {
      element.remove();
    });
  }

  function init() {
    submitBtnElement.addEventListener('click', addGroceryList);
    clearItemElement.addEventListener('click', clearGroceryList);
    groceryFormElement.addEventListener('submit', addGroceryList);
  }

  init();
});
