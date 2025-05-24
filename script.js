//Adding Divs inside the container

const container = document.getElementById('container');


function createDivs (numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('innerDiv');
    container.appendChild(innerDiv);
    }
}


createDivs(256);

/*
Basic pseudo code for my understanding! 
making a sketch pad project


*/