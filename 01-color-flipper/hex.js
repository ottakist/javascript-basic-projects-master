// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector('#btn')
const color = document.querySelector('.color')
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let setColor =()=>{
    document.body.style.backgroundColor =getRandomHexColor()
    color.textContent=document.body.style.backgroundColor
    console.log(getRandomHexColor());
}
button.addEventListener('click',setColor)