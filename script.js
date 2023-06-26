let gridContainer = document.getElementById('grid-container');


function createGridContainer(gridCont){
    gridCont.style.display = "grid";
    gridCont.style.gridTemplateColumns = "repeat(16, 1fr)";
    gridCont.style.gridTemplateRows = "repeat(16, 1fr)";
    gridCont.style.border = "0.5px solid black";
}



function createGrid(size) {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      var cell = document.createElement("div");
      cell.classList.add("grid-cell");
      gridContainer.appendChild(cell);
    }
  }
}
createGridContainer(gridContainer);
createGrid(16);