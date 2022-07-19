const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector('#btn')
const color = document.querySelector('.color')
let randomColor =()=>{
    return Math.floor(Math.random()*colors.length)
}
let setColor =()=>{
    document.body.style.backgroundColor =colors[randomColor()]
    color.textContent=document.body.style.backgroundColor
}
button.addEventListener('click',setColor)