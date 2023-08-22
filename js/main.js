const button = document.getElementById("generate");
const grid = document.getElementById("grid");

generateGrid();

button.addEventListener("click", function () {
  generateGrid();
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
  //cell.innerHTML = cellText;

  cell.addEventListener("click", function () {
    cell.classList.add("azure");
    console.log(cellText);
  });

  return cell;
}

const randomNumber = Math.floor(Math.random() * 16) + 1;
console.log(randomNumber);
