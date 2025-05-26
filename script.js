//Adding Divs inside the container

const container = document.getElementById('container');
let defaultRows = 16;
let defaultColumns = 16;
let defaultCell = defaultRows * defaultColumns;
// let defaultCellSize = container.clientWidth/defaultCell;  


function createDivs (numberOfDivs, cellSize) {
    for (let i = 0; i < numberOfDivs; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    //calling cell size here
    innerDiv.style.width = `${cellSize}px`;
    innerDiv.style.height = `${cellSize}px`;

    container.appendChild(innerDiv);

    //mouse over event for the innner Divs
            innerDiv.addEventListener("mouseenter", function(){
            innerDiv.classList.add("active");
        });
        innerDiv.addEventListener("mouseleave", function(){
        setTimeout(() => {
                innerDiv.classList.add("passive")
            }, 200);        
        });
    }
}

createDivs(defaultCell);


//button function that helps prompt for change of grid

const buttonGrid = document.querySelector('.buttonGrid');
const clearGrid = document.querySelector('.clearGrid');
const rainbowGrid = document.querySelector('.rainbowGrid');
// this function is for new grid
function onClick () {
    buttonGrid.addEventListener('click', function(){
        let intake;
        do {
            intake = prompt("Change grid by entering a number, max squares = 100");
            if (intake === null) return;
            intake = Number(intake);
        } while (isNaN(intake) || (intake <= 0 || intake > 100));
        container.replaceChildren();
        let rows = intake;
        let columns = intake;
        let totalCells = rows * columns;
        let cellSize = container.clientWidth/intake;
        createDivs(totalCells, cellSize);
    });
};
onClick();

// this function is for resetting the grid

function resetGrid () {
    let boxes = document.querySelectorAll('.innerDiv');
    boxes.forEach(box => {
        box.style.backgroundColor = "";
        box.style.opacity = "";
        box.classList.remove('active', 'passive');
    })
}
    
clearGrid.addEventListener('click', resetGrid);


//function below turns and resets to rainbow grid

function rainbow () {
    rainbowGrid.addEventListener('click', function() {
    container.replaceChildren();
    let cellSize = container.clientWidth / defaultColumns;
    createDivs(defaultCell, cellSize);
    const innerDiv = document.querySelectorAll('.innerDiv');
    innerDiv.forEach(cell => {
        cell.addEventListener("mouseenter", function(){
        cell.style.backgroundColor = getRandomRGB();
    })
})
})
}
rainbow();

function getRandomRGB () {
    let red = Math.floor(Math.random() *256);
    let green = Math.floor(Math.random() *256);
    let blue = Math.floor(Math.random() *256);
    return `rgb(${red}, ${green}, ${blue})`;
}