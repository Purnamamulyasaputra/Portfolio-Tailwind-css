// Navbar Scrool
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    const fixedNav = header.offsetTop;
    header.classList.toggle('navbar-fixed', this.window.scrollY > fixedNav)
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})