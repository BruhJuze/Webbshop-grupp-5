import { allRings, ringCategories } from "./module/productData";
import { Ring } from "./module/ring";

let filteredItems = new Array<Ring>(); 

const presentURL = window.location.href;

const ringURL = new URLSearchParams(presentURL);

let ringTypeKey: string = "";

for (const key of ringURL.keys()){
   ringTypeKey = key; 
}

const getRing: string = ringURL.get(ringTypeKey)|| '{}';

checkCategory(getRing);

function checkCategory(ring: string){

    console.log(presentURL);

    for (let category of ringCategories){
        
        if(getRing == category){
            filteredItems = allRings.filter((item )=> {
                return item.ringType == getRing;
            });
        };
    };

};

const productContainer = document.getElementById('product-container');

function renderPageTitle(ringType: string) {

    let contentType; 
    
    switch (ringType) {
        case 'solitar' : 
            contentType = "Solitärringar";
            break;
        case 'halo' : 
            contentType = "Halorringar";
            break;
        case 'tresten' : 
            contentType = "Trestensringar";
            break;
        case 'sidosten' : 
            contentType = "Sidostensringar";
            break;
        case 'slata' : 
            contentType = "Släta ringar";
            break;
        case 'allians' : 
            contentType = "Alliansringar";
            break;

            default: 
                contentType = "Solitärringar";
    }

    const subheaderTitle = document.querySelector('.subheader__title') as HTMLHeadElement;

    subheaderTitle.innerHTML = contentType;


}

function renderProducts(ring: Ring[]){

    for (let ring of allRings){

        if (getRing == ring.ringType){
            const result = allRings.filter(res=>res.ringType);

            const productLink = document.createElement('a');
            productLink.setAttribute('id', String(ring.id));
            productLink.setAttribute('href', String('productPage.html'));
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

    }

    };
};

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

renderProducts(filteredItems);

renderPageTitle(getRing);