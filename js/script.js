"use strict";

const ratingScreen = document.getElementById("rating-screen");
const thankYouScreen = document.getElementById("thank-you-screen");
const thankYouSubtext = document.getElementById("thanks-subtext");
const submitButton = document.getElementById("submit-btn");
let rating = 0;

function submit() {
  ratingScreen.classList.add("hide");
  thankYouScreen.classList.remove("hide");
}

submitButton.addEventListener("click", function () {
  submit();
});
