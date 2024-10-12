const body = document.querySelector('body'); 
const container = document.querySelector(".container")
const button = document.querySelector('.pixcount')
containerWidth=container.offsetWidth;






button.addEventListener('click', askPrompt);


function createSides (sides) {
    container.innerHTML = '';
    const pixelSize = containerWidth / sides;
    
    console.log("Container width: " +containerWidth)
    console.log("Sides " + sides)
    console.log("Pixel size " + pixelSize)

    for (let i = 0; i < sides*sides; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;

        container.append(pixel);

        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "black";
        })  
        pixel.addEventListener('mouseout', () => {
            pixel.style.backgroundColor = "red";
        })  
    }
}

function askPrompt () {
    let input = prompt("How many sides do you want(1-100)?")
    
    if (isNaN(input) || input > 100 || input < 1) {
        alert("Please enter a number between 1-100")
    } else {
        createSides(parseInt(input))
    }
}


createSides(15);




