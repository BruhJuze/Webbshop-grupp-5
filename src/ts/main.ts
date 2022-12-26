const hamburger = document.querySelector('.hamburger');
const cartButton = document.querySelector('.cart-button');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.cart');
const closeButton = document.querySelector('.close-button');
const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo-png');

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
    } else {
        navbar?.classList.add('is-scrolled');
        logo?.classList.add('is-scrolled');
        mobileMenu?.classList.add('is-scrolled');
    }

    console.log(hScroll);
});

//Mikails kodning______________________________________________________________________________________________________________________________________

function checkoutLoad() {
    location.href = "/checkout.html";
    console.log("load");
    }

checkoutBtn.addEventListener("click", checkoutLoad);

let newProduct: HTMLDivElement = document.createElement("div") as HTMLDivElement;
let totalPrice: HTMLDivElement = document.getElementById("totalPrice") as HTMLDivElement;
let bTag: HTMLBaseElement = document.createElement("b") as HTMLBaseElement;
newProduct.className = "mainCheckout__newProduct"



prodContainer.appendChild(newProduct);
prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));
let priceTest: number[] = [2000, 10,];

for(let i = 0; i < priceTest.length; i++){

let pTag: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;

pTag.innerHTML = priceTest[i] + " kr";

bTag.innerHTML = priceTest[0] + priceTest[1] + " kr";
totalPrice.appendChild(pTag);
totalPrice.appendChild(pTag);
totalPrice.appendChild(bTag);

}







