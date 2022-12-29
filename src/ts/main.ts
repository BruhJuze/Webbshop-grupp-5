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

let checkoutBtn: HTMLButtonElement = document.getElementById("checkoutBtn") as HTMLButtonElement;
let prodContainer: HTMLTableSectionElement = document.getElementById("checkoutProductContainer") as HTMLTableSectionElement;


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
const width: number = productImagesAll[0]?.clientWidth;

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



/************  end of productPage content js  ***********/




//Mikails kodning______________________________________________________________________________________________________________________________________

let totalPrice: HTMLDivElement = document.getElementById("totalPrice") as HTMLDivElement;
let bTag: HTMLBaseElement = document.createElement("b") as HTMLBaseElement;

for(let i=0; i < 4; i++){
    let newProduct: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let title:HTMLElement = document.createElement("section") as HTMLElement;
    let image:HTMLImageElement = document.createElement("img") as HTMLImageElement;
    let rightContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let leftContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let leftChildContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let pricePerThing:HTMLElement = document.createElement("section") as HTMLElement;
    let amountContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let sum:HTMLElement = document.createElement("section") as HTMLElement;
    let removeBtn:HTMLElement = document.createElement("i") as HTMLElement;
    let amountAdd: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let amountSub: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let amountNumber: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let plusIcon:HTMLElement = document.createElement("i") as HTMLElement;
    let minusIcon:HTMLElement = document.createElement("i") as HTMLElement;
    

    newProduct.className = "mainCheckout__newProduct";
    title.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__title";
    image.className = "mainCheckout__newProduct__leftContainer__image";
    rightContainer.className = "mainCheckout__newProduct__rightContainer"
    leftContainer.className = "mainCheckout__newProduct__leftContainer"
    sum.className = "mainCheckout__newProduct__rightContainer__sum";
    removeBtn.className = "mainCheckout__newProduct__rightContainer__remove";
    removeBtn.className = "bi bi-x-lg";
    amountContainer.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer";
    leftChildContainer.className = "mainCheckout__newProduct__leftContainer__leftChildContainer";
    pricePerThing.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__pricePerThing";
    amountAdd.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer__sub";
    amountNumber.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer__amountNumber";
    amountSub.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer__add";
    plusIcon.className = "bi bi-plus";
    minusIcon.className = "bi bi-dash";

    title.innerHTML = "title";
    sum.innerHTML = "1500 kr";
    image.src = "./assets/Startsidan/HALO.jpeg";
    pricePerThing.innerHTML = "1500 kr/st."
    amountNumber.innerHTML = "1";


    newProduct.appendChild(leftContainer);
    newProduct.appendChild(rightContainer);
    leftContainer.appendChild(image);
    leftContainer.appendChild(leftChildContainer);
    leftChildContainer.appendChild(title);
    leftChildContainer.appendChild(pricePerThing);
    leftChildContainer.appendChild(amountContainer);
    amountContainer.appendChild(amountSub);
    amountContainer.appendChild(amountNumber);
    amountContainer.appendChild(amountAdd);
    amountAdd.append(plusIcon);
    amountSub.append(minusIcon);
    rightContainer.appendChild(removeBtn);
    rightContainer.appendChild(sum);
    
    prodContainer.appendChild(newProduct);
    

}

let priceTest: number[] = [2000, 10,];

for(let i = 0; i < priceTest.length; i++){

let pTag: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;

pTag.innerHTML = priceTest[i] + " kr";

bTag.innerHTML = priceTest[0] + priceTest[1] + " kr";
totalPrice.appendChild(pTag);
totalPrice.appendChild(pTag);
totalPrice.appendChild(bTag);

}







