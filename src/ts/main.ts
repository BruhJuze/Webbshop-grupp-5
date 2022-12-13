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



// class Social{
//     constructor(public picture: URL){}
// }

// let firstPic: Social = new Social(/Users/cassandrabook/Documents/Webbutveckling/Webbshop-grupp-5/src/assets/Startsidan/HALO.jpeg);
//  let instagram = document.getElementById("social-media");