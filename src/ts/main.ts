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
const productImagesAll = document.querySelectorAll('.product-images img');

let count = 1;
const width: number = productImagesAll[0].clientWidth;

let currentPosition = 0;

if ( window.innerWidth < 600){

(productImages as HTMLInputElement).style.transform = 'translateX(' + (-width * count) + 'px)';


prevButton?.addEventListener('click', () => {
    if (count <= 0) return;
    currentPosition = -width * count;
    (productImages as HTMLInputElement).style.transition = 'transform 300ms ease-in-out';
    count--;
    (productImages as HTMLInputElement).style.transform = 'translateX(' + (-width * count) + 'px)';
});

nextButton?.addEventListener('click', ()=> {
    if (count >= productImagesAll.length -1) return; 
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
        let imgTag = event.target as HTMLImageElement;
        mainImg.src = imgTag.src;
    });
});




// /**************  productPage content js  **************/

const productImageContainer = document.querySelector('.product-image-container');
const mainImage = document.querySelector('.main-img');
const productImgSmallGroup = document.querySelector('.small-group');
const productInfoTitle = document.querySelector('.product-info__title');
const productInfoText = document.querySelector('.product-info__text');
const productDescTextInner = document.querySelector('.product-desc__text__inner');


function renderProductContent(){

    for (let ring of allRings){


            //create main img
            const productImg = document.createElement('img');
            productImg.setAttribute('id', String("main-img"));
            mainImage?.appendChild(productImg);
            for(let i=0; i<1; i++){
                productImg.src = ring.img[i];
            }

            for(let i=0; i< ring.img.length; i++){
                const smallGroupImg = document.createElement('div');
                smallGroupImg.classList.add("small-group__img");
                productImgSmallGroup?.appendChild(smallGroupImg);    
            }

            //create small img
            const smallImg = document.createElement('img');

            const largeImage = document.createElement('img');
            largeImage.classList.add("large-image");
            productImages?.appendChild(largeImage);
            //largeImage.src = ring.img;

            //set title
            const productTitle = document.createElement('h3');
            productTitle.innerHTML = ring.name;
            productInfoTitle?.appendChild(productTitle);

            //set text
            const productText = document.createElement('p');
            productText.innerHTML = ring.first_desc;
            productInfoText?.appendChild(productText);

            //set description
            const productDesc = document.createElement('p');
            productDesc.innerHTML = ring.first_desc;

            productDescTextInner?.appendChild(productDesc);

    }
}

/************  end of productPage content js  ***********/

/*********function to convert ring objects to json */

renderProductContent();
