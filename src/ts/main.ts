import { solitaireRings } from './module/productData';
/**************  nav-menu js  **************/

const hamburger = document.querySelector('.hamburger');
const cartButton = document.querySelector('.cart-button');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.cart');
const closeButton = document.querySelector('.close-button');
const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo-png');

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
    } else {
        navbar?.classList.add('is-scrolled');
        logo?.classList.add('is-scrolled');
        mobileMenu?.classList.add('is-scrolled');
    }

});

/**************  end of nav-menu js  **************/

/**************  productCategory js  **************/

const productContainer = document.getElementById('product-container');

function renderProducts(){

    for (let ring of solitaireRings){
        
        const productLink = document.createElement('a');
        productLink.setAttribute('id', String("id__"+ring.id));
        productLink.classList.add("product-link");
        productContainer?.appendChild(productLink);

        const product = document.createElement('div');
        product.classList.add("product");
        productLink?.appendChild(product);

        const productImage = document.createElement('div');
        productImage.classList.add("product__image");
        product?.appendChild(productImage);

        const productImg = document.createElement('img');
        productImage?.appendChild(productImg);
        //productImg.src = ring.first_img;

        productImg.src = ring.img[1];

        const productTitle = document.createElement('p');
        productTitle.classList.add("product__title");
        productTitle.innerHTML = ring.name;
        product?.appendChild(productTitle);

        const productPrice = document.createElement('p');
        productPrice.classList.add("product__price");
        productPrice.innerHTML = String(ring.price + " :-");
        product?.appendChild(productPrice);
    };
};

renderProducts();

/************** URL parameters  **************/

const productLinks = document.querySelectorAll('.product-link');

const url = 'http://localhost:1234/productPage.html?';

// const obj = {
//     v1: "javascript",
//     v2: "java",
//     v3: "python",
// };

const product_id_keywords = ['solitärringar', 'haloringar', 'trestensringar', 'sidostensringar', 'slätaringar'];

const searchParams = new URLSearchParams(obj);
console.log(searchParams);

const queryString = searchParams.toString();
console.log(queryString);

productLinks.forEach((link) =>{
    link.addEventListener('click', (event)=> {
        console.log(event.target);

        window.location.href = url + queryString;
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


// function renderProductContent(){

//     for (let ring of solitaireRings){

//         if(ring.id == 1){

//             //create main img
//             const productImg = document.createElement('img');
//             productImg.setAttribute('id', String("main-img"));
//             mainImage?.appendChild(productImg);
//             //productImg.src = ring.first_img;

//             for(let i=0; i< ring.img.length; i++){
//                 const smallGroupImg = document.createElement('div');
//                 smallGroupImg.classList.add("small-group__img");
//                 productImgSmallGroup?.appendChild(smallGroupImg);    
//             }

//             //create small img
  

//             const smallImg1 = document.createElement('img');
//             const smallImg2 = document.createElement('img');
//             const smallImg3 = document.createElement('img');
//             const smallImg4 = document.createElement('img');
//             smallGroupImg1.appendChild(smallImg1);
//             smallGroupImg2.appendChild(smallImg2);
//             smallGroupImg3.appendChild(smallImg3);
//             smallGroupImg4.appendChild(smallImg4);
//             smallImg1.src = ring.second_img;
//             smallImg2.src = ring.third_img;
//             smallImg3.src = ring.second_img;
//             smallImg4.src = ring.second_img;

//             const largeImage1 = document.createElement('img');
//             const largeImage2 = document.createElement('img');
//             const largeImage3 = document.createElement('img');
//             const largeImage4 = document.createElement('img');
//             largeImage1.classList.add("large-image");
//             largeImage2.classList.add("large-image");
//             largeImage3.classList.add("large-image");
//             largeImage4.classList.add("large-image");
//             productImages?.appendChild(largeImage1);
//             productImages?.appendChild(largeImage2);
//             productImages?.appendChild(largeImage3);
//             productImages?.appendChild(largeImage4);
//             largeImage1.src = ring.first_img;
//             largeImage2.src = ring.first_img;
//             largeImage3.src = ring.first_img;
//             largeImage4.src = ring.first_img;

//             //set title
//             const productTitle = document.createElement('h3');
//             productTitle.innerHTML = ring.name;
//             productInfoTitle?.appendChild(productTitle);

//             //set text
//             const productText = document.createElement('p');
//             productText.innerHTML = ring.first_desc;
//             productInfoText?.appendChild(productText);

//             //set description
//             const productDesc1 = document.createElement('p');
//             productDesc1.innerHTML = ring.first_desc;

//             const productDesc2 = document.createElement('p');
//             productDesc2.innerHTML = ring.second_desc;

//             const productDesc3 = document.createElement('p');
//             productDesc3.innerHTML = ring.third_desc;

//             productDescTextInner?.appendChild(productDesc1);
//             productDescTextInner?.appendChild(productDesc2);
//             productDescTextInner?.appendChild(productDesc3);
//         }
//     }
// }

// renderProductContent();

/************  end of productPage content js  ***********/