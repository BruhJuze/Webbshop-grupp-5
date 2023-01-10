import { Ring } from './module/ring';
import { allRings } from './module/productData';
import { ringCategories } from './module/productData';

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

//let cart: Array<{ id: string, item: number}> = JSON.parse(localStorage.getItem("data")!) || [];

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
             const getRingEntries =  ringTypeURL.searchParams.entries();

             let ringTypeKey: string = "";

             for (const key of ringTypeURL.searchParams.keys()){
                ringTypeKey = key; 
             }

             console.log(ringTypeKey);

             window.location.href = dataAttributeHref + ringTypeKey +"=" +getRingType;
    });
});



/************** URL parameters  **************/

const productLinks = document.querySelectorAll('.product-link');

const productIdMap = new Map();
productIdMap.set('solitar__type', '')

let iURL = new URL(window.location.href);


productLinks.forEach( (link)=> {
    link.addEventListener('click', (event) =>{
     let currentItem = event.target as HTMLImageElement;
        const dataAttributeProductid = currentItem.getAttribute('data-productid') || '{}'; 
        const dataAttributeRingname = currentItem.getAttribute('data-ringname') || '{}'; 
        iURL.searchParams.set("product", dataAttributeRingname);
        const newQuery = iURL.toString();
        history.pushState(null, "", newQuery);
    });
});

/************** end of URL parameters  **************/

/**************  end of nav-menu js  **************/

/**************  productPage js  **************/

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');


const productImages = document.querySelector('.product-images');
const productImagesAll = document.getElementsByClassName('large-image');

let count = 0;
const width: number = productImages?.clientWidth || 0;

let currentPosition = 0;

if ( window.innerWidth < 600){ // set max width of image carousel

(productImages as HTMLInputElement).style.transform = 'translateX(' + (-width * count) + 'px)';


prevButton?.addEventListener('click', () => {
    if (count <= 0) return;
    currentPosition = -width * count;
    (productImages as HTMLInputElement).style.transition = 'transform 300ms ease-in-out';
    count--;
    (productImages as HTMLInputElement).style.transform = 'translateX(' + (-width * count) + 'px)';
});

nextButton?.addEventListener('click', ()=> {
    if (count >= (productImagesAll.length -2))
    return; 
    currentPosition = -width * count;
    (productImages as HTMLInputElement).style.transition = 'transform 300ms ease-in-out';
    count++;
    (productImages as HTMLInputElement).style.transform = 'translateX(' + (-width * count) + 'px)';
});

};

const navigationDots = document.querySelectorAll('.navigation-dots label');

navigationDots.forEach((dot) => {
    dot.addEventListener('click', (event)=> {
        console.log(event.target);

    });
});

const mainImg = document.getElementById('mainImg') as HTMLImageElement;
const smallImages = document.querySelectorAll('.small-group__img');

smallImages.forEach((smallImg) => {
    smallImg.addEventListener('click', (event)=> {
        console.log("funka");
        let imgTag = event.target as HTMLImageElement;
        mainImg.src = imgTag.src;
    });
});




// /**************  productPage content js  **************/



/************  end of productPage content js  ***********/


