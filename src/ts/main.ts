/**************  nav-menu js  **************/

const hamburger = document.querySelector('.hamburger');
const cartButton = document.querySelector('.cart-button');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.cart');
const closeButton = document.querySelector('.close-button');
const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo-png');
const dropdownMenu = document.querySelector('.dropdown');
const dropdownMenu2 = document.querySelector('.dropdown2');

hamburger?.addEventListener('click', () => {
    hamburger?.classList.toggle('is-active');
    mobileMenu?.classList.toggle('is-active');
});

cartButton?.addEventListener('click', () => {
    cart?.classList.add('is-active');
});

closeButton?.addEventListener('click', () => {
    cart?.classList.remove('is-active');
});

window.addEventListener('scroll', () => {
    let hScroll = window.scrollY;
    
    if(hScroll < 150){
        navbar?.classList.remove('is-scrolled');
        logo?.classList.remove('is-scrolled');
        mobileMenu?.classList.remove('is-scrolled');
        dropdownMenu?.classList.remove('is-scrolled');
        dropdownMenu2?.classList.remove('is-scrolled');
    } else {
        navbar?.classList.add('is-scrolled');
        logo?.classList.add('is-scrolled');
        mobileMenu?.classList.add('is-scrolled');
        dropdownMenu?.classList.add('is-scrolled');
        dropdownMenu2?.classList.add('is-scrolled');
    }

});

/**************  end of nav-menu js  **************/

/************* Local Storage  *****************/

/**************  productCategory js  **************/

let getRingType: string = ""; 
let ringTypeURL = new URL(window.location.href);
const ringLinks = document.querySelectorAll('.ring-links');

ringLinks.forEach( (link)=> {
    link.addEventListener('click', (event)=> {
        event.preventDefault();

            let currentItem = event.target as HTMLAnchorElement; 
             const dataAttributeRingType = currentItem.getAttribute("data-ringtype") || '{}';

            const dataAttributeHref = currentItem.getAttribute("href") + "?";

            ringTypeURL.searchParams.set("ringtype", dataAttributeRingType);
            
            const newQuery = ringTypeURL.toString();

            history.pushState(null, "", newQuery); 

             getRingType =  ringTypeURL.searchParams.get("ringtype") || '{}';

             let ringTypeKey: string = "";

             for (const key of ringTypeURL.searchParams.keys()){
                ringTypeKey = key; 
             }

             console.log(ringTypeKey);

             window.location.href = dataAttributeHref + ringTypeKey +"=" +getRingType;
    });
});


/**************  end of nav-menu js  **************/



