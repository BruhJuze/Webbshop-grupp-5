const hamburger = document.querySelector('.hamburger');
const cartButton = document.querySelector('.cart-button');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.cart');
const closeButton = document.querySelector('.close-button');

hamburger?.addEventListener('click', function(){
    hamburger?.classList.toggle('is-active');
    mobileMenu?.classList.toggle('is-active');
});

cartButton?.addEventListener('click', function(){
    cart?.classList.add('is-active');
});

closeButton?.addEventListener('click', function(){
    cart?.classList.remove('is-active');
});