const button = document.getElementById(`btn`);

button.addEventListener(`click`, () => {
  const userInput = document.getElementById(`user-input`).value;

  const listContainer = document.getElementById(`list-container`);

  const listItems = document.createElement(`li`);

  const divEL = document.createTextNode(userInput);

  const divIcon = document.createElement(`i`);

  listItems.setAttribute(`onclick`, `removeItem(event)`);

  divIcon.classList = "fa fa-xmark";

  listItems.classList = `list-item`;

  listItems.append(divEL, divIcon);

  listContainer.append(listItems);
});

function removeItem(event) {
  let existingList = event.target.parentNode;
  existingList.remove();
}
