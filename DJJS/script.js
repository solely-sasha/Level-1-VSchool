const square = document.getElementById("square");

// Blue ib hover
square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "blue";
});

// Red when the mouse button is held down over the square
square.addEventListener("mousedown", () => {
  square.style.backgroundColor = "red";
});

// Yellow when the mouse button is let go over the square
square.addEventListener("mouseup", () => {
  square.style.backgroundColor = "yellow";
});

// Green when the mouse is double clicked in the square
square.addEventListener("dblclick", () => {
  square.style.backgroundColor = "green";
});

// Orange when the mouse scroll is used somewhere in the window
window.addEventListener("wheel", () => {
  square.style.backgroundColor = "orange";
});

// Change color using keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  switch (key) {
    case "b":
      square.style.backgroundColor = "blue";
      break;
    case "r":
      square.style.backgroundColor = "red";
      break;
    case "y":
      square.style.backgroundColor = "yellow";
      break;
    case "g":
      square.style.backgroundColor = "green";
      break;
    case "o":
      square.style.backgroundColor = "orange";
      break;
  }
});
