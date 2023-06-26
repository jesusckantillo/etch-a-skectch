let gridContainer = document.getElementById('grid-container');
let gridCells;
let changeColorButton = document.getElementById('btn-change-color');
let rainbowModeButton = document.getElementById('btn-rainbow-mode');
let eraserButton = document.getElementById('btn-eraser');

let rainbowMode = false

//Event handlers functions

handleEraserButton = (e) => {
  cleanGrid();
}

handleChangeColorButton = (e) => {
  console.log(e.target);
}

handleRainbowModeButton = (e) => {
  rainbowMode = !rainbowMode;
  console.log("Rainbow mode: " + rainbowMode);
  //Use "?" operator for change the color if the rainbowMode is true
  rainbowMode ? rainbowModeButton.style.backgroundColor = "gray" : rainbowModeButton.style.backgroundColor =  "#2b3d4f";
  
}


handleDraggingDraw = (e) => {
  if(e.buttons === 1){
   rainbowMode ? drawBlack(e.target,generateRandomColor()) :  drawBlack(e.target,"black")  ;
  }
}

handleClickDraw = (e) => {
 rainbowMode ?  drawBlack(e.target,generateRandomColor()) :  drawBlack(e.target,"black")  ;
}









//Event Listeners
eraserButton.addEventListener('click', handleEraserButton);
changeColorButton.addEventListener('click', handleChangeColorButton);
rainbowModeButton.addEventListener('click',handleRainbowModeButton);

function addGridEventListeners(cellsList){
  cellsList.forEach(cell => {
      cell.addEventListener('mouseover',handleDraggingDraw);
      cell.addEventListener('click',handleClickDraw);
  });
}




//Grid Functions
function createGridContainer(gridCont){
    gridCont.style.display = "grid";
    gridCont.style.gridTemplateColumns = "repeat(16, 1fr)";
    gridCont.style.gridTemplateRows = "repeat(16, 1fr)";
    gridCont.style.border = "0.5px solid black";
}


function cleanGrid(){
  let gridCells = document.querySelectorAll('.grid-cell');
  gridCells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
}


function createGrid(size) {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      var cell = document.createElement("div");
      cell.classList.add("grid-cell");
      gridContainer.appendChild(cell);
    }
  }
   gridCells = document.querySelectorAll('.grid-cell');
   addGridEventListeners(gridCells);
}


//Draw Functions

function drawBlack(div, color){
  div.style.backgroundColor = color;
}


function generateRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  
  return color;
}





createGridContainer(gridContainer);
createGrid(16);
console.log(rainbowMode)