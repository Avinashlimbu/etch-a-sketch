//Adding Divs inside the container

const container = document.getElementById('container');


function createDivs (numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    container.appendChild(innerDiv);

    //mouse over event for the innner Divs
            innerDiv.addEventListener("mouseenter", function(){
            innerDiv.classList.add("active");
        });
        innerDiv.addEventListener("mouseleave", function(){
        setTimeout(() => {
                innerDiv.classList.add("passive")
            }, 500);        
        });
    }
}
createDivs(512/2);

//button function that helps prompt for change of grid

const buttonGrid = document.querySelector('.buttonGrid');
const clearGrid = document.querySelector('.clearGrid');
function resetGrid () {
    let boxes = document.querySelectorAll('.active');
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
        box.style.opacity = 1;
    })
}

// this function is for new grid
function onClick () {
    buttonGrid.addEventListener('click', function(){
        let intake;
        do {
            intake = prompt("Change grid by entering a number, max squares = 100");
            if (intake === null) break;
            intake = Number(intake);
        } while (isNaN(intake) || (intake <= 0 || intake > 100));
        container.replaceChildren();
        createDivs(intake*10);
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




