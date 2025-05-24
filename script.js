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





