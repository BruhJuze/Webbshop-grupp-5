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


let solitaireRings = [
    {
        id: 1,
        name: "ANDREA",
        img: "/ANDREA.0f109549.jpeg",
        price: 7200
    },
    {
        id: 2,
        name: "Daniela",
        img: "/DANIELA.13482500.jpeg",
        price: 5600
    },
    {
        id: 3,
        name: "Blanche",
        img: "/BLANCHE.3536c89c.jpeg",
        price: 5600
    },
    {
        id: 4,
        name: "Magdalena",
        img: "/MAGDALENA.60008d27.jpeg",
        price: 6300
    },
    {
        id: 5,
        name: "Caroline",
        img: "/CAROLINE.ecf621ea.jpeg",
        price: 8500
    },
    {
        id: 6,
        name: "Caroline",
        img: "/CAROLINE.ecf621ea.jpeg",
        price: 8500
    },
];

const productContainer = document.getElementById('product-container');

function renderProducts(){

    for (let ring of solitaireRings){
        
        const productLink = document.createElement('a');
        productLink.setAttribute('href', './productPage.html');
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
        productImg.src = ring.img;

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