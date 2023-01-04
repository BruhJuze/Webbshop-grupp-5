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

    let getRingName: string = ""; 

    let ringNameURL = new URL(window.location.href);

    for (let ring of allRings){

        if (getRing == ring.ringType){
            const result = allRings.filter(res=>res.ringType);

            const productLink = document.createElement('a');
            productLink.setAttribute('id', String(ring.id));
            productLink.setAttribute('href', String("/productPage.html"));
            productLink.setAttribute('data-ringname', ring.name);
            productLink.classList.add("product-link");
            productLink.addEventListener('click', (event)=> {
                event.preventDefault();

                let currentItem = event.target as HTMLAnchorElement; 
                let currentHref= productLink.getAttribute('href') || "";

                console.log(currentHref);

                const dataAttributeRingName = currentItem.getAttribute("data-ringname") || '{}';

                console.log(dataAttributeRingName);
                const dataAttributeHref = currentHref + "?";

                console.log(dataAttributeHref);

                ringNameURL.searchParams.set("name", dataAttributeRingName);
                
                const newQuery = ringNameURL.toString();

                history.pushState(null, "", newQuery); 

                getRingName =  ringNameURL.searchParams.get("name") || '{}';
                const getRingEntries =  ringNameURL.searchParams.entries();

                let ringNameKey: string = "";

                for (const key of ringNameURL.searchParams.keys()){
                    ringNameKey = key; 
                }

                console.log(ringNameKey);
                
                window.location.href = dataAttributeHref + ringNameKey +"=" +dataAttributeRingName;
            });

            productContainer?.appendChild(productLink);

            const product = document.createElement('div');
            product.classList.add("product");
            productLink?.appendChild(product);
    
            const productImage = document.createElement('div');
            productImage.classList.add("product__image");
            product?.appendChild(productImage);
    
            const productImg = document.createElement('img');
            productImg.classList.add(ring.ringType);
            productImg.classList.add("product-links");
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


let getRingName: string = ""; 

let ringNameURL = new URL(window.location.href);

let productLinks = document.querySelectorAll('.product__title');

renderProducts(filteredItems);

renderPageTitle(getRing);