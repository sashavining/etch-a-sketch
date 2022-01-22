const container = document.querySelector(".container");
const gridContainer = document.createElement("div");
const resetButton = document.querySelector(".reset");
const gridToggleButton = document.querySelector(".gridToggleButton");
const rainbowDrawButton = document.querySelector(".rainbowPen");
const blackDrawButton = document.querySelector(".blackPen");
const eraser = document.querySelector(".erase");
const colorPickerValue = document.querySelector("#colorPickerValue");


gridContainer.classList.add("gridContainer");
gridContainer.classList.add("grayBackground");


let p = document.getElementById("val");
let range = document.getElementById("slide");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

// idea - use this function to change the cell sizes range.onchange = function () {
    // }

    /* outputs value from slider*/
let changeVal = () => {
    p.textContent = range.value
  }
changeVal();
  
range.onchange = changeVal;

range.addEventListener ('change',(e) => {
    let totalCells = range.value*range.value;
    drawCells(range.value, totalCells);
});


colorPickerValue.addEventListener("change", function(){
    let theColor = colorPickerValue.value;
    drawCustom(theColor);
},);


/*draws the cells*/


function drawCells (rowLength, totalCells) {
    for(i=0; i<totalCells; i++) {
            if (i===0 && !gridContainer.childNodes) {
                let gridCells = document.createElement('div');
                gridCells.classList.add('grid');
                gridContainer.appendChild (gridCells);
            } else if (i===0) {
                removeAllChildNodes(gridContainer);
                let gridCells = document.createElement('div');
                gridCells.classList.add('grid');
                gridContainer.appendChild (gridCells);
            }
            else if (i<totalCells-1) {
                let gridCells = document.createElement('div');
                gridCells.classList.add('grid');
                gridContainer.appendChild (gridCells);
            } else if (i==totalCells-1){
                let gridCells = document.createElement('div');
                gridCells.classList.add('grid');
                gridContainer.appendChild (gridCells);
                console.log(rowLength);
                gridContainer.style.cssText=`grid-template-columns: repeat(${rowLength}, 1fr);`
                gridContainer.style.cssText=`grid-template-columns: repeat(${rowLength}, 1fr);`
                console.log("last one!")
    };
};};

drawCells (16, 256);


container.appendChild(gridContainer);

const gridCells = gridContainer.childNodes;

function drawBlack () {
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        //cell.setAttribute('id', 'blackBackground');
        cell.style.background="black";
    })
});};


function drawRainbow () {
    gridCells.forEach((cell) => {
        const rainbowArray = ["red", "orange", "yellow", "green", "blue", "purple"];
        const randomBackgroundColor = rainbowArray[Math.floor(Math.random() * 6)];
        cell.addEventListener('mouseover', () => {
        //cell.setAttribute('id',`${randomBackgroundColor}`//
        cell.style.background=`${randomBackgroundColor}`;
    })
});};


function drawCustom (color) {
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.style.background =`${color}`});
    })
};

/* Grid toggle function & button*/

function toggleGrid () {
    gridContainer.classList.toggle ('grayBackground');
}

function eraseDrawing () {
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.removeAttribute('id');
        cell.removeAttribute('style');
    })
})};

gridToggleButton.addEventListener ('click', toggleGrid);
blackDrawButton.addEventListener ('click', drawBlack);
rainbowDrawButton.addEventListener ('click', drawRainbow);
eraser.addEventListener ('click', eraseDrawing);




/*changes colors on the grid cells*/

/*defined original working function as drawBlack. Need to set up a raimbow tool & erase tool as well.*/

/*
function drawRainbow () {gridCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
    cell.classList.add('blackBackground');
})
})};

function erase () {gridCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
    cell.classList.add('blackBackground');
})
})};
*/
resetButton.addEventListener('click', () => {
    gridCells.forEach((cell) => {
    cell.removeAttribute("id");
    cell.removeAttribute("style");
    })
});
