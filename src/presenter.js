import {fizzbuzz } from "./fizzbuzz.js";  

const first = document.querySelector("#numero-input");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + fizzbuzz(firstNumber) + "</p>";
});
