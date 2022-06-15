"use strict";

const ratingScreen = document.getElementById("rating-state");
const numbers = document.getElementById("rating-scale-container");
const submitButton = document.getElementById("submit-btn");
const thankYouScreen = document.getElementById("thank-you-state");
const selectedRating = document.getElementById("selected-rating");
const errorMsg = document.getElementById("error-message");

numbers.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let chosenBtn = e.target.innerHTML;
    selectedRating.textContent = chosenBtn;
  }
});

submitButton.addEventListener("click", (e) => {
  if (selectedRating.textContent > 0) {
    ratingScreen.classList.add("hide");
    thankYouScreen.classList.remove("hide");
  } else {
    submitButton.classList.add("shake-horizontal");
    errorMsg.textContent = `Please select your rating`;
    errorMsg.classList.add("fade-in-fwd");
  }
});
