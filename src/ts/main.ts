const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});