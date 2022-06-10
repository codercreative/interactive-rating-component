"use strict";

const ratingScreen = document.getElementById("rating-state");
const numbers = document.getElementById("rating-scale-container");
const submitButton = document.getElementById("submit-btn");
const thankYouScreen = document.getElementById("thank-you-state");
const selectedRating = document.getElementById("selected-rating");

submitButton.addEventListener("click", function () {
  submit();
});

numbers.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let chosenBtn = e.target.textContent;
    selectedRating.textContent = chosenBtn;
    ratingScreen.classList.add("hide");
    thankYouScreen.classList.remove("hide");
  }
});
