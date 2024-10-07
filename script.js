const container = document.createElement('div');
const body = document.querySelector('body');

container.className = "box";


body.append(container)


for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div')
    container.append(pixel);
    pixel.classList.add('pixel');  
    pixel.addEventListener('hover', )
}
