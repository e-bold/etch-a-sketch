const body = document.querySelector('body'); 
const container = document.querySelector(".container")
const button = document.querySelector('.pixcount')
const clearBtn = document.querySelector('.clear-btn')

let currentSides = 16; //default grid when page is loaded
containerWidth=container.offsetWidth;



button.addEventListener('click', askPrompt);


clearBtn.addEventListener('click', () => {
    createSides(currentSides);
});




function createSides (sides) {
    currentSides = sides;
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
            pixel.style.backgroundColor = "red";
        })  
        pixel.addEventListener('mouseout', () => {
            pixel.style.backgroundColor = generateRandomPastelColor();
            
        })  
    }
}

function askPrompt () {
    let input = prompt("Enter your desired grid size (1-50)?")
    
    if (isNaN(input) || input > 50 || input < 1) {
        alert("Please enter a number between 1-100!")
    } else {
        currentSides = parseInt(input);
        createSides(currentSides);
    }
}


function generateRandomPastelColor() {
    const hue = Math.random() * 360;
    const saturation = 0.5 + (Math.random() * 0.3); // softer saturation
    const lightness = 0.7 + (Math.random() * 0.2); // lighter tone
    return `hsl(${hue}, ${saturation*100}%, ${lightness*100}%)`;
}



createSides(currentSides);




