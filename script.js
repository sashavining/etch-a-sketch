const container = document.querySelector(".container");
const gridContainer = document.createElement("div");
const resetButton = document.querySelector(".reset");
gridContainer.classList.add("gridContainer");

resetButton.addEventListener('click', () => {
    gridCells.forEach((cell) => {
    cell.classList.remove('blackBackground');
    })
});

let p = document.getElementById("val")
let range = document.getElementById("slide")
let changeVal = () => {
  p.textContent = range.value
}
changeVal()

range.onchange = changeVal;
// idea - use this function to change the cell sizes range.onchange = function () {
    // }

for(i=0; i<256; i++) {
    let gridCells = document.createElement('div');
    gridCells.classList.add("grid");
    gridContainer.appendChild (gridCells);
    console.log("hi!");
}

container.appendChild(gridContainer);

const gridCells = gridContainer.childNodes;

gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.classList.add('blackBackground');
    })
});

