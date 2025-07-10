// color swatches
const background = document.querySelector("#background");
const heading = document.querySelector("#heading");
const text = document.querySelector("#text");
const card = document.querySelector("#card-bg");
const primary = document.querySelector("#primary");
const secondary = document.querySelector("#secondary");

const root = document.querySelector(":root");

const hexContainers = document.querySelectorAll(".hex-value");

// gets a color from a selected element
function getInitialColor(ele) {
  // gets the variable style color from the element
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    ele
  );

  return color;
}

// gets the color values of the items and stores them in an array
const itemArray = [
  background.value,
  heading.value,
  text.value,
  card.value,
  primary.value,
  secondary.value,
];

// set the color of the swatches and gets the hex container text
function setColorPicker() {
  // sets colors of swatches
  background.value = getInitialColor("--background-color");
  heading.value = getInitialColor("--heading-color");
  text.value = getInitialColor("--text-color");
  card.value = getInitialColor("--card-color");
  primary.value = getInitialColor("--primary-color");
  secondary.value = getInitialColor("--secondary-color");

  // sets hex container hex codes
  itemArray[0] = getInitialColor("--background-color");
  itemArray[1] = getInitialColor("--heading-color");
  itemArray[2] = getInitialColor("--text-color");
  itemArray[3] = getInitialColor("--card-color");
  itemArray[4] = getInitialColor("--primary-color");
  itemArray[5] = getInitialColor("--secondary-color");
}

// sets the hex code color for each swatch
function setColorText() {
  hexContainers.forEach((container, index) => {
    container.textContent = itemArray[index];
  });
}

function setColor(element, color) {
  document.documentElement.style.setProperty(element, color);
  // each time the color changes, it will change the swatch palette
  setColorAndText();
}

// sets initial colors
setColorAndText();

function setColorAndText() {
  setColorPicker();
  setColorText();
}

// event listener on each swatch to listen
// to change on input and get the color value
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
  root.removeAttribute("data-theme");

  // sets original color palette when
  // a swatch value is changed
  setColor("--background-color", "#edf2f4");
  setColor("--heading-color", "#1e202f");
  setColor("--text-color", "#2b2d42");
  setColor("--card-color", "#e4e4e4");
  setColor("--primary-color", "#233bef");
  setColor("--secondary-color", "#006925");
});

darkBtn.addEventListener("click", () => {
  root.setAttribute("data-theme", "dark");

  setColor("--background-color", "#1e202f");
  setColor("--heading-color", "#edf2f4");
  setColor("--text-color", "#edf2f4");
  setColor("--card-color", "#515151");
  setColor("--primary-color", "#3a4bd0");
  setColor("--secondary-color", "#01ef55");
});

// random mode
const randomBtn = document.querySelector(".random");

randomBtn.addEventListener("click", () => {
  document.body.removeAttribute("data-theme");

  setColor("--background-color", randomHex());
  setColor("--heading-color", randomHex());
  setColor("--text-color", randomHex());
  setColor("--card-color", randomHex());
  setColor("--primary-color", randomHex());
  setColor("--secondary-color", randomHex());

  setColorAndText();
});

// random hex value function referenced from
// https://css-tricks.com/snippets/javascript/random-hex-color/

function randomHex() {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
