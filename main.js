const button = document.getElementById(`btn`);
button.addEventListener(`click`, () => {
  const userInput = document.getElementById(`user-input`);
  const listContainer =document.getElementById(`list-container`)
  const list = document.createElement(`li`);
  const textContent = document.createTextNode(userInput.value);
  list.className = `list-item`;
  list.append(textContent);
  listContainer.append(list);
});
