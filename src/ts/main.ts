import { Ring } from './module/ring';
import { allRings } from './module/productData';
import { ringCategories } from './module/productData';
import { addOrUpdateUrlParam } from './module/urlControl';
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

const productContainer = document.getElementById('product-container');

let getRingType: string = ""; 

let ringTypeURL = new URL(window.location.href);

const ringLinks = document.querySelectorAll('.ring-links');

ringLinks.forEach( (link)=> {
    link.addEventListener('click', (event)=> {
        event.preventDefault();

            let currentItem = event.target as HTMLAnchorElement; 
            const dataAttributeRingType = currentItem.getAttribute("data-ringtype") || '{}';
            ringTypeURL.searchParams.set("ringtype", dataAttributeRingType);
            const newQuery = ringTypeURL.toString();
            history.pushState(null, "", newQuery); 

            getRingType =  ringTypeURL.searchParams.get("ringtype") || '{}';

            //console.log(getRingType);

            checkCategory(getRingType);
            return getRingType;
    });
});

let filteredItems = new Array<Ring>(); 

function checkCategory(ring: string){
    for (let category of ringCategories){
        
        if(getRingType == category){
            filteredItems = allRings.filter((item )=> {
                return item.ringType == getRingType;
            });
        };
    };
    renderProducts(filteredItems);
};

function renderProducts(ring: Ring[]){

    for (let ring of allRings){

        if (getRingType == ring.ringType){
            const result = allRings.filter(res=>res.ringType);

            console.log(result);


            const productLink = document.createElement('a');
            productLink.setAttribute('id', String(ring.id));
            //productLink.setAttribute('href', "/productPage.html");
            productLink.classList.add("product-link");
            productContainer?.appendChild(productLink);
    
            const product = document.createElement('div');
            product.classList.add("product");
            productLink?.appendChild(product);
    
            const productImage = document.createElement('div');
            productImage.classList.add("product__image");
            product?.appendChild(productImage);
    
            const productImg = document.createElement('img');
            productImg.classList.add(ring.ringType);
            productImage?.appendChild(productImg);
            //productImg.src = ring.first_img;
            productImg.setAttribute('data-productid', ring.ringType);
            productImg.setAttribute('data-ringname', ring.name);
            productImg.src = ring.img[0];
    
            const productTitle = document.createElement('p');
            productTitle.classList.add("product__title");
            productTitle.innerHTML = ring.name;
            product?.appendChild(productTitle);
    
            const productPrice = document.createElement('p');
            productPrice.classList.add("product__price");
            productPrice.innerHTML = String(ring.price + " :-");
            product?.appendChild(productPrice);

        
        // const productLink = document.createElement('a');
        // productLink.setAttribute('id', String(ring.id));
        // //productLink.setAttribute('href', "/productPage.html");
        // productLink.classList.add("product-link");
        // productContainer?.appendChild(productLink);

        // const product = document.createElement('div');
        // product.classList.add("product");
        // productLink?.appendChild(product);

        // const productImage = document.createElement('div');
        // productImage.classList.add("product__image");
        // product?.appendChild(productImage);

        // const productImg = document.createElement('img');
        // productImg.classList.add(ring.ringType);
        // productImage?.appendChild(productImg);
        // //productImg.src = ring.first_img;
        // productImg.setAttribute('data-productid', ring.ringType);
        // productImg.setAttribute('data-ringname', ring.name);
        // productImg.src = ring.img[0];

        // const productTitle = document.createElement('p');
        // productTitle.classList.add("product__title");
        // productTitle.innerHTML = ring.name;
        // product?.appendChild(productTitle);

        // const productPrice = document.createElement('p');
        // productPrice.classList.add("product__price");
        // productPrice.innerHTML = String(ring.price + " :-");
        // product?.appendChild(productPrice);

    }

    };
};



/************** URL parameters  **************/

const productLinks = document.querySelectorAll('.product-link');

const productIdMap = new Map();
productIdMap.set('solitar__type', '')

let iURL = new URL(window.location.href);


productLinks.forEach( (link)=> {
    link.addEventListener('click', (event) =>{
     let currentItem = event.target as HTMLImageElement;
        //addOrUpdateUrlParam("product-type", currentItem.className);
        // currentItem.closest('.product-link')?.setAttribute("href", "http://localhost:1234/productPage.html?"+currentItem.className);
        const dataAttributeProductid = currentItem.getAttribute('data-productid') || '{}'; 
        const dataAttributeRingname = currentItem.getAttribute('data-ringname') || '{}'; 
        //iURL.searchParams.set("productid", dataAttributeProductid);
        iURL.searchParams.set("product", dataAttributeRingname);
        const newQuery = iURL.toString();
        history.pushState(null, "", newQuery);
    });
});

// const url = 'http://localhost:1234/productPage.html?';

// // const obj = {
// //     v1: "javascript",
// //     v2: "java",
// //     v3: "python",
// // };

// const product_id_keywords = ['solitärringar', 'haloringar', 'trestensringar', 'sidostensringar', 'slätaringar'];

// const searchParams = new URLSearchParams(obj);
// console.log(searchParams);

// const queryString = searchParams.toString();
// console.log(queryString);

// productLinks.forEach((link) =>{
//     link.addEventListener('click', (event)=> {
//         console.log(event.target);

//         window.location.href = url + queryString;
//     });
// });

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


//const mainImg = document.querySelector('.main-img img');
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
            //smallGroupImg.appendChild(smallImg);

            //smallImg.src = ring.second_img;


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

renderProductContent();

/************  end of productPage content js  ***********/