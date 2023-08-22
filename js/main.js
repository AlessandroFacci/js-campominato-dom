const button = document.getElementById("generate");
const grid = document.getElementById("grid");

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

function generateCell(i) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerHTML = i;

  cell.addEventListener("click", function () {
    cell.classList.add("azure");
    console.log(i);
  });

  return cell;
}
