const btn = document.getElementById('btn');
const container = document.getElementById('container');
const inputBox = document.getElementById('inp');

btn.addEventListener('click', ()=>{
    const rgb = rgbGenerator();
    inputBox.value = rgb;
    container.style.backgroundColor = rgb;
})

function rgbGenerator() {
    const red = Math.floor(Math.random() * 255);
    // inputBox.value = red;
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const finalRGB = `rgb(${red}, ${green}, ${blue})`;
    return finalRGB;

}