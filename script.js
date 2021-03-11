const changeSizeButton = document.getElementById("change-size-btn");
const clearButton = document.getElementById("clear");
const blackButton = document.getElementById("black");
const rainbowButton = document.getElementById("rainbow");
const grid = document.getElementById("grid");

let currentColor = "black";

window.addEventListener("load", LoadGrid(16));
changeSizeButton.addEventListener("click", ChangeSize);
blackButton.addEventListener("click", ChooseBlackColor);
rainbowButton.addEventListener("click", ChooseRainbowColor);
clearButton.addEventListener("click", ClearColors);

function LoadGrid(dim){
    grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
    for(let i = 0; i < dim * dim; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList = "grid-square";
        gridSquare.addEventListener("mouseover", ChangeColor);
        grid.appendChild(gridSquare);
    }
}

function ChangeColor(e) {



    if(currentColor === "black") e.target.style.backgroundColor = "black";
    if(currentColor === "rainbow") {
        let randomColor = "#ff0000";
        randomColor = RandomColor();
        e.target.style.backgroundColor = randomColor;
    };
}

function ChangeSize(){
    let size = prompt("Enter your desired size(1-64)");
    if(size !== null){
        size = parseInt(size);
    }
    if (size < 1 || size > 64 || Number.isNaN(size)){
        alert("Invalid size, try again");
        ChangeSize();
    }
    else {
        ClearCurrentGrid();
        LoadGrid(size);
    }
}

function ClearCurrentGrid(){
    let gridSquares = document.getElementsByClassName("grid-square");
    let i = gridSquares.length;
    while(i--){
        gridSquares[i].remove();
    }
}

function RandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function ChooseBlackColor(){
    currentColor = "black";
}
function ChooseRainbowColor(){
    currentColor = "rainbow";
}
function ClearColors(){
    let gridSquares = document.getElementsByClassName("grid-square");
    let i = gridSquares.length;
    while(i--){
        gridSquares[i].style.backgroundColor = "transparent";
    }
}