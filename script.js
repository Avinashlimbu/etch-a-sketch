//Adding Divs inside the container

const container = document.getElementById('container');

function createDivs (numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    container.appendChild(innerDiv);

    //mouse over event for the innner Divs
            innerDiv.addEventListener("mouseenter", function(){
            this.style.backgroundColor = "lightblue";
        });
            innerDiv.addEventListener("mouseleave", function(){
            this.style.backgroundColor = "";
        });
    }
}
createDivs(512/2);





