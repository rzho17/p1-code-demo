const background = document.querySelector("#background");
const heading = document.querySelector("#heading");
const text = document.querySelector("#text");
const card = document.querySelector("#card-bg");
const primary = document.querySelector("#primary");
const secondary = document.querySelector("#secondary");

const root = document.querySelector(":root");

const hexContainers = document.querySelectorAll(".hex-value");

function getInitialColor(ele) {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    ele
  );

  return color;
}

const itemArray = [
  background.value,
  heading.value,
  text.value,
  card.value,
  primary.value,
  secondary.value,
];

// sets initial colors
setColorAndText();

function setColorAndText() {
  setColorPicker();
  setColorText();
}

function setColorPicker() {
  background.value = getInitialColor("--background-color");
  heading.value = getInitialColor("--heading-color");
  text.value = getInitialColor("--text-color");
  card.value = getInitialColor("--card-color");
  primary.value = getInitialColor("--primary-color");
  secondary.value = getInitialColor("--secondary-color");

  itemArray[0] = getInitialColor("--background-color");
  itemArray[1] = getInitialColor("--heading-color");
  itemArray[2] = getInitialColor("--text-color");
  itemArray[3] = getInitialColor("--card-color");
  itemArray[4] = getInitialColor("--primary-color");
  itemArray[5] = getInitialColor("--secondary-color");
}

function setColorText() {
  hexContainers.forEach((container, index) => {
    container.textContent = itemArray[index];
  });
}

function setColor(element, color) {
  document.documentElement.style.setProperty(element, color);
  setColorAndText();
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

  setColor("--background-color", "#edf2f4");
  setColor("--heading-color", "#1e202f");
  setColor("--text-color", "#2b2d42");
  setColor("--card-color", "#e4e4e4");
  setColor("--primary-color", "#ef233c");
  setColor("--secondary-color", "#006925");
  setColorAndText();
});

darkBtn.addEventListener("click", () => {
  document.body.setAttribute("data-theme", "dark");

  setColor("--background-color", "#1e202f");
  setColor("--heading-color", "#edf2f4");
  setColor("--text-color", "#edf2f4");
  setColor("--card-color", "#515151");
  setColor("--primary-color", "#eb4255");
  setColor("--secondary-color", "#00d049");
  setColorAndText();
});

// random mode

const randomBtn = document.querySelector(".random");

randomBtn.addEventListener("click", () => {
  itemArray[0] = randomHex();
  itemArray[1] = randomHex();
  itemArray[2] = randomHex();
  itemArray[3] = randomHex();
  itemArray[4] = randomHex();
  itemArray[5] = randomHex();

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
