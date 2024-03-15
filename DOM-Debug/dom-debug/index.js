const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function (e) {
  // Changed "onclick" to "click"
  const subItem = createSubItem(e);
  document.getElementById("list").appendChild(subItem);
});

function createDropDown() {
  const dropDown = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    // Changed to colors.length for correct iteration
    const option = document.createElement("option"); // added document to the createElement
    option.innerHTML = colors[i];
    option.value = colors[i];
    dropDown.append(option);
  }
  dropDown.addEventListener("change", function (e) {
    // Changed "onchange" to "change"
    e.target.parentNode.style.backgroundColor = e.target.value; // reference parent and set background color
  });
  return dropDown;
}

function createSubItem(e) {
  const subItem = document.createElement("div");
  var subItemValue = document.getElementById("input").value; // get the value from the input
  subItem.textContent = subItemValue;
  const dropDown = createDropDown();
  subItem.appendChild(dropDown);
  subItem.setAttribute("class", "sub-item"); // Updated class name to match CSS
  return subItem;
}
