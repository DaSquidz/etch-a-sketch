const changeSizeButton = document.getElementById("change-size-btn");
const grid = document.getElementById("grid")

window.addEventListener("load", LoadGrid(16));
changeSizeButton.addEventListener("click", ChangeSize);

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
    e.target.style.backgroundColor = "black";
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
        gridSquares[i].style.backgroundColor = "transparent";
    }
}