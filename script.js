const body = document.querySelector('body'); 
const container = document.querySelector(".container")
const button = document.querySelector('.pixcount')
containerWidth=container.offsetWidth;
let sides = 16;







button.addEventListener('click', askPrompt);


function createSides () {
    for (let i = 0; i < sides*sides; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = containerWidth/sides +"px";
        pixel.style.height = containerWidth/sides + "px";

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
    let input = prompt("How many sides do you want?")
    
    if (isNaN(input) || input > 40) {
        alert("please enter a number between 1 - 40")
        
    } else {
        input = parseInt(input);
        sides = input;
        alert(sides);
    }
}

createSides()






