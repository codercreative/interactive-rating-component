"use strict";

const ratingScreen = document.getElementById("rating-state");
const numbers = document.getElementById("rating-scale-container");
const submitButton = document.getElementById("submit-btn");
const thankYouScreen = document.getElementById("thank-you-state");
const selectedRating = document.getElementById("selected-rating");
let rating = 0;

function submit() {
  ratingScreen.classList.add("hide");
  thankYouScreen.classList.remove("hide");
}

submitButton.addEventListener("click", function () {
  submit();
});

numbers.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let chosenBtn = e.target.innerHTML;
    selectedRating.textContent = chosenBtn;
  }
});
