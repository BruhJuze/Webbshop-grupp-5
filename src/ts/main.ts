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

let purchaseBtn:HTMLButtonElement = document.getElementById("purchaseBtn") as HTMLButtonElement;

function checkoutLoad() {
    location.href = "/checkout.html";
    console.log("load");
    }

checkoutBtn.addEventListener("click", checkoutLoad);

/*function completeLoad() {
    location.href = "/order-done.html";
    console.log("load");
    }
 
purchaseBtn.addEventListener("click", completeLoad);
*/
let totalPrice: HTMLDivElement = document.getElementById("totalPrice") as HTMLDivElement;
let bTag: HTMLBaseElement = document.createElement("b") as HTMLBaseElement;






//prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));
//prodContainer.appendChild(newProduct.cloneNode(true));

for(let i=0; i < 5; i++){
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







