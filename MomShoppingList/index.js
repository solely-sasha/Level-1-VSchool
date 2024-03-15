// reference to the form
const form = document.querySelector("#add-todo");

// reference to the ul
const list = document.querySelector("#list");

// Function to add a new item to the list
const newItem = (item) => {
  const listItem = document.createElement("li");
  const div = document.createElement("div");
  div.textContent = item;
  listItem.appendChild(div);

  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  listItem.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete");
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
};

// Event listener for list item buttons
list.addEventListener("click", function (event) {
  const target = event.target.closest("button"); // Get the clicked button

  if (!target) return; // Exit if the clicked element is not a button

  const listItem = target.closest("li");

  if (!listItem) return; // Exit if the clicked button is not inside an <li> element

  const divElement = listItem.querySelector("div");

  if (target.textContent === "edit") {
    if (divElement) {
      const currentValue = divElement.textContent.trim();
      divElement.innerHTML = `<input type="text" value="${currentValue}">`;
      target.textContent = "save";
    }
  } else if (target.textContent === "save") {
    const inputElement = listItem.querySelector("input[type='text']");

    if (inputElement) {
      const newValue = inputElement.value.trim();
      divElement.textContent = newValue;
      const editButton = document.createElement("button");
      editButton.textContent = "edit";
      listItem.appendChild(editButton);
      target.remove();
    }
  } else if (target.textContent === "X") {
    listItem.remove();
  }
});

// Listen for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = form.title.value.trim(); // Trim the input value
  if (item) {
    // Ensure the input is not empty
    newItem(item);
    form.reset();
  }
});
