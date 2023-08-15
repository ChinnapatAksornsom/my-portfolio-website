//Menubar Showing//
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

////////////
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

