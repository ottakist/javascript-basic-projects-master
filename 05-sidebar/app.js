const navButton = document.querySelector('.sidebar-toggle')
const closeButton = document.querySelector('.close-btn')
const slideBar= document.querySelector('.sidebar')
navButton.addEventListener('click',()=>{
    slideBar.classList.toggle('show-sidebar')
})
closeButton.addEventListener('click',()=>{
    slideBar.classList.remove('show-sidebar')
})