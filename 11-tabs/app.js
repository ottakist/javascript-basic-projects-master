const btns = document.querySelectorAll('.tab-btn')
const content = document.querySelectorAll('.content')
const about= document.querySelector('.about')
about.addEventListener('click',(e)=>{
    const id = e.target.dataset.id
    if(id){
    btns.forEach(btn=>{
        btn.classList.remove('active')
            e.target.classList.add('active')
            content.forEach(item=>{
             const itemId = item.getAttribute('id')
             if(itemId==id){
                 item.classList.add('active')
             }
             else{
                 item.classList.remove('active')
             }
            })
     })
}
})
