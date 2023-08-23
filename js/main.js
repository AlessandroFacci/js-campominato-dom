const button = document.getElementById("generate");
const grid = document.getElementById("grid");
let bombs = [];
//generateGrid();

button.addEventListener("click", function () {
  generateGrid();
  bombs = generateBombs();
  console.log(bombs);
});

function generateGrid() {
  grid.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    const cell = generateCell(i);
    grid.append(cell);
  }
}

function generateCell(cellText) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerHTML = cellText;

  cell.addEventListener("click", function () {
    if (bombs.includes(cellText)) {
      cell.classList.add("red");
      alert("Bomba");
    } else {
      cell.classList.add("azure");
      console.log(cellText);
    }
  });

  return cell;
}

function generateBombs() {
  const bombs = [];
  const max = 100;
  const min = 1;

  while (bombs.length < 16) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }

  console.log(bombs);
  return bombs;
}
