const grid = document.getElementById("grid")

window.addEventListener("load", LoadGrid(16));

function LoadGrid(dim){
    grid.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
    for(let i = 0; i < dim * dim; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList = "grid-square";
        //gridSquare.addEventListener("mouseover", changeColor);
        grid.appendChild(gridSquare);
    }
}