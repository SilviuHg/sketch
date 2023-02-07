const mainContainer = document.querySelector(".main-container");
const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");

// INITIALIZE DEFAULT GRID 16x16
for (let i = 1; i <= 256; i++) {
  const divs = document.createElement("div");
  divs.className = "grid-div";
  mainContainer.appendChild(divs);
  divs.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
  });
}

// REMOVE PREVIOUS GRID AFTER SELECTING NEW SIZE GRID
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// FUNCTION TO GET NEW GRID
// 1. INPUT DESIRED SIZE; 2. REMOVE PREVIOUS GRID; 3. INITIALIZE GRID.
button1.addEventListener("click", () => {
  const size = prompt("Select your size (Maximum: 100)", "16");
  if (+size > 100) return;
  if (+size < 0) return;
  if (isNaN(size)) return;
  if (size === null) return;
  removeAllChildNodes(mainContainer);
  mainContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${+size}, 1fr); grid-template-rows: repeat(${+size}, 1fr);`
  );
  for (let i = 1; i <= (+size) ** 2; i++) {
    divs = document.createElement("div");
    divs.className = "grid-div";
    mainContainer.appendChild(divs);
    divs.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

// FUNCTION TO RESET GRID
button2.addEventListener("click", () => {
  let allCells = document.querySelectorAll(".grid-div");
  allCells.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

// GET RANDOM COLOR
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// FUNCTION TO APPLY RGB COLOR
const rgb = document.querySelector(".btn-3");
rgb.addEventListener("click", function () {
  let allCells = document.querySelectorAll(".grid-div");
  allCells.forEach((item) => {
    item.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  });
});

// FUNCTION TO GET THE DEFAULT BLACK COLOR
const black = document.querySelector(".btn-4");
black.addEventListener("click", function () {
  let allCells = document.querySelectorAll(".grid-div");
  allCells.forEach((item) => {
    item.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  });
});
