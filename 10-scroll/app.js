// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date')
date.innerHTML=new Date().getFullYear()
// ********** close links ************
const toggleBtn = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const nav = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')
toggleBtn.addEventListener('click',()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height
    if(containerHeight===0){
        linksContainer.style.height=`${links.getBoundingClientRect().height}px`
    }
    else{
        linksContainer.style.height=`0px`
    }
})
// ********** fixed navbar ************
window.addEventListener('scroll',()=>{
    const scrollH =window.pageYOffset;
    const navH=nav.getBoundingClientRect().height;
    if(scrollH>navH){
        nav.classList.add('fixed-nav')
    }
    else{
        nav.classList.remove('fixed-nav')
    }
    if(scrollH>1000){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights