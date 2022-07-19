let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(bnt=>{
    bnt.addEventListener('click',(e)=>{
        let style = e.currentTarget.classList
       if(style.contains('decrease')){
        count--
       }
       else if(style.contains('increase')){
        count++
       }
       else{
        count = 0
       }
       value.textContent=count
       if(count>0){
        value.style.color='green'
       }
       else if(count<0){
        value.style.color='red'
       }
       else{
        value.style.color='black'
       }
    })
})