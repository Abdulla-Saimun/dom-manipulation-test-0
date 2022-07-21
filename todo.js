const inputbox = document.querySelector('#inp');
const buttonClick = document.querySelector('#insertBtn');

const outputBox = document.querySelector('.output');

outputBox.innerHTML = '';

buttonClick.addEventListener('click', () => {
    const inputValue = inputbox.value;
    const newElm = document.createElement('p');
    newElm.innerText = inputValue;
    outputBox.appendChild(newElm);
    inputbox.value = "";
    newElm.addEventListener('click', () => {
        if(newElm.style.textDecoration === "line-through") {
            newElm.style.textDecoration = "none";
        } else {
            newElm.style.textDecoration = 'line-through';
        }
        
    });

    newElm.addEventListener('dblclick', () => {
        outputBox.removeChild(newElm);
    })
});