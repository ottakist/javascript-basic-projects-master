//using selectors inside the element
// traversing the dom
const article = document.querySelectorAll('.question')
const button = document.querySelectorAll('.question-btn')
button.forEach(element => {
element.addEventListener('click',(e)=>{

    let question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text')
    article.forEach(element=>{
        if(element!==question){
            element.classList.remove('show-text')
        }
        })
})    
});