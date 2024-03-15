// Create an h1
const h1 = document.createElement("h1");

// Enter text for h1
h1.textContent = "JavaScript is cool!!";

// Append h1 to document header
document.getElementById("header").appendChild(h1).style.textAlign = "center";

// Create a subtitle with an h2 element
const subTitle = document.createElement("h2");

// Add the text and styling
subTitle.innerHTML = '<span class="name">Sasha</span> wrote the JavaScript';

// Append subtitle to the header
document.getElementById("header").appendChild(subTitle);
subTitle.style.textAlign = "center";

// Update the background colors of messages based on the selected theme
const themeDropDown = document.getElementById("theme-drop-down");
const messages = document.querySelectorAll(".message");

themeDropDown.addEventListener("change", function () {
  const selectedTheme = themeDropDown.value;

  switch (selectedTheme) {
    case "theme-one":
      messages.forEach((message) => {
        message.classList.remove("theme-two");
        message.classList.add("theme-one");
      });
      break;
    case "theme-two":
      messages.forEach((message) => {
        message.classList.remove("theme-one");
        message.classList.add("theme-two");
      });
      break;
    default:
      break;
  }
});

// Select the clear button
const clear = document.getElementById("clear-button");

// Select the div with class of messages
const allMessages = document.querySelector(".messages");

// Clear messages when button is clicked
clear.addEventListener("click", () => {
  allMessages.textContent = "";
});
