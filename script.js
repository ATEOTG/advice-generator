"use strict";

const parentEl = document.querySelector(".text");
const circle = document.querySelector(".circle");
const dice = document.querySelector(".dice");

let windowWidth = window.innerWidth;
const runAdvice = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const { slip } = await res.json();
    // Want to generate the html fitted to the advice we retrieved
    const html = `
    <p class="sub">ADVICE #${slip.id}</p>
            <h1 class="primary-heading">
              "${slip.advice}"
            </h1>
    `;

    // clear the html inside the parent element and then insert the new html
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", html);
  } catch (err) {
    console.error(err);
  }
};
// Event for click
circle.addEventListener("click", runAdvice);
dice.addEventListener("click", runAdvice);

// event for mouse over/hover
window.addEventListener("resize", function () {
  windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth >= 800) {
    dice.addEventListener("mouseover", function () {
      circle.classList.add("glow");
    });
    dice.addEventListener("mouseout", function () {
      circle.classList.remove("glow");
    });
  } else {
    dice.addEventListener("mouseover", function () {
      circle.classList.remove("glow");
    });
  }
});

window.addEventListener("load", function () {
  if (windowWidth > 800) {
    dice.addEventListener("mouseover", function () {
      circle.classList.add("glow");
    });
    dice.addEventListener("mouseout", function () {
      circle.classList.remove("glow");
    });
  } else {
    circle.classList.remove("glow");
  }
});
