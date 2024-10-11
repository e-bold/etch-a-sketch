const body = document.querySelector('body'); 
const container = document.querySelector(".container")
const button = document.querySelector('.pixcount')
let sides = 16;





button.addEventListener('click', () => {
    let input = prompt("How many sides do you want?")
    if (input !== isNaN || input > 40) {
        alert("please enter a number between 1 - 40")
    } else {
        input = parseInt(input);
        sides = input;
    }
})










for (let i = 0; i < sides*sides; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.append(pixel);
    
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = "black";
    })  
    pixel.addEventListener('mouseout', () => {
        pixel.style.backgroundColor = "red";
    })  
}

