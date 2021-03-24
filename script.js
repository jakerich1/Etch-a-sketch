document.addEventListener("DOMContentLoaded", function () {
    drawGrid(16);
    document.getElementById("clear").addEventListener("click", function(){newGrid()});
});

//Clears current grid and re-draws a blank grid with a use prompt for drid size
function newGrid() {
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = '';
    let gridSize = prompt("Please enter a new grid size (max 100)", "24");
    if (gridSize != null) {
        drawGrid(gridSize);
    }
}

function drawGrid(gridSize) {

    if (gridSize > 100) {
        gridSize = 100;
    }
    const wrapper = document.querySelector(".wrapper");

    //for loop to draw the grid rows
    for (let index = 0; index < gridSize; index++) {

        const element = document.createElement("div");
        element.className = "row";
        wrapper.appendChild(element);

        let row = document.querySelectorAll(".row");
        let last = [].slice.call(row).pop();

        //for loop to draw the grid columns
        for (let index = 0; index < gridSize; index++) {

            const cell = document.createElement("div");
            cell.className = "cell";
            last.appendChild(cell);

        }

    }

    //if cells have been drawn, initiate the paint logic
    if (document.querySelectorAll(".cell").length > 0) {
        paint();
    }
}

//paint logic which adds the event listeners to the drawn grid cells
function paint() {
    const cells = document.querySelectorAll(".cell");
    for (let index = 0; index < cells.length; index++) {

        cells[index].addEventListener("mouseover", function () {
            cells[index].classList.add("hovered");
        });

    }
}