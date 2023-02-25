// DOM Elements
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

// Looping through all div's and adding the active class
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    // Remove active class
    removeActive();

    // Getting the selected rating text
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;

    // Add active class
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// Event handler
btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our costumer support.</p>
    `;
  }
});

// Remove active class from all div's
function removeActive() {
  ratingEls.forEach((ratingEls) => {
    ratingEls.classList.remove("active");
  });
}
