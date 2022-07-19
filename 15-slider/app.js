const slide = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
let counter= 0
slide.forEach((element,index) => {
    element.style.left=`${index*100}%`
});
const courusel =()=>{
    if(counter===slide.length){
        counter=0
    }
    if(counter<0){
        counter=slide.length-1
    }
    slide.forEach(element=>{
        element.style.transform=`translateX(-${counter*100}%)`
    })
}
nextBtn.addEventListener('click',()=>{
    counter++
    courusel()
})
prevBtn.addEventListener('click',()=>{
    counter--
    courusel()
})