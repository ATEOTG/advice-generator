"use strict";

const parentEl = document.querySelector(".text");
const circle = document.querySelector(".circle");
const dice = document.querySelector(".dice");

const runAdvice = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
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

circle.addEventListener("click", runAdvice);
dice.addEventListener("click", runAdvice);
