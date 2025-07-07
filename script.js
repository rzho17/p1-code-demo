const background = document.querySelector("#background");
const heading = document.querySelector("#heading");
const text = document.querySelector("#text");
const card = document.querySelector("#card-bg");
const primary = document.querySelector("#primary");
const secondary = document.querySelector("#secondary");

const root = document.querySelector(":root");

function setColor(element, color) {
  document.documentElement.style.setProperty(element, color);
}

background.addEventListener("input", (e) => {
  const color = e.target.value;
  setColor("--background-color", color);
});

heading.addEventListener("input", (e) => {
  const color = e.target.value;
  console.log(color);
  setColor("--heading-color", color);
});

text.addEventListener("input", (e) => {
  const color = e.target.value;
  setColor("--text-color", color);
});

card.addEventListener("input", (e) => {
  const color = e.target.value;
  setColor("--card-color", color);
});

primary.addEventListener("input", (e) => {
  const color = e.target.value;
  setColor("--primary-color", color);
});

secondary.addEventListener("input", (e) => {
  const color = e.target.value;
  setColor("--secondary-color", color);
});

// light and dark mode

const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");

lightBtn.addEventListener("click", () => {
  document.body.removeAttribute("data-theme");
});

darkBtn.addEventListener("click", () => {
  document.body.setAttribute("data-theme", "dark");
});

// random mode

const randomBtn = document.querySelector(".random");

randomBtn.addEventListener("click", () => {
  setColor("--background-color", randomHex());
  setColor("--heading-color", randomHex());
  setColor("--text-color", randomHex());
  setColor("--card-color", randomHex());
  setColor("--primary-color", randomHex());
  setColor("--secondary-color", randomHex());
});

// random hex value function referenced from
// https://css-tricks.com/snippets/javascript/random-hex-color/

function randomHex() {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);

  const hexValue = `#${randomHex}`;
  return hexValue;
}
