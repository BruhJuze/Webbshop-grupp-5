import { allRings } from "./module/productData";
import { Ring } from "./module/ring";

let filteredItems = new Array<Ring>(); 

const presentURL = window.location.href;

const ringURL = new URLSearchParams(presentURL);

let ringTypeKey: string = "";

for (const key of ringURL.keys()){
   ringTypeKey = key; 
}

const getRing: string = ringURL.get(ringTypeKey)|| '{}';

//console.log(getRing);

// checkCategory(getRing);

// function checkCategory(ring: string){

//     console.log(presentURL);

//     for (let category of allRings){
        
//         if(getRing == category.name){
//             filteredItems = allRings.filter((item )=> {
//                 return item.name == getRing;
//             });
//         };
//     };

// };



const productContainer = document.getElementById('product-container');


const productImageContainer = document.querySelector('.product-image-container');
const mainImage = document.querySelector('.main-img');
const productImgSmallGroup = document.querySelector('.small-group');
const productInfoTitle = document.querySelector('.product-info__title');
const productInfoText = document.querySelector('.product-info__text');
const productDescTextInner = document.querySelector('.product-desc__text__inner');
const productImages = document.querySelector('.product-images');

function renderProductContent(product: string){

    for (let product of allRings){

        //const getProduct = ring;

            if(getRing == product.name){
                    
                //create main img
                const productImg = document.createElement('img');
                productImg.setAttribute('id', String(".main-img"));
                mainImage?.appendChild(productImg);
                for(let i=0; i<1; i++){
                    productImg.src = product.img[i];
                }

                for(let i=0; i< product.img.length; i++){
                    const smallGroupImg = document.createElement('img');
                    smallGroupImg.classList.add("small-group__img");
                    productImgSmallGroup?.appendChild(smallGroupImg); 
                    smallGroupImg.src = product.img[i];   
                }

                //create small img
                const smallImg = document.createElement('img');

                const largeImage = document.createElement('img');
                largeImage.classList.add("large-image");
                productImages?.appendChild(largeImage);
                //largeImage.src = ring.img;

                //set title
                const productTitle = document.createElement('h3');
                productTitle.innerHTML = product.name;
                productInfoTitle?.appendChild(productTitle);

                //set text
                const productText = document.createElement('p');
                productText.innerHTML = product.first_desc;
                productInfoText?.appendChild(productText);

                //set description
                const productDesc = document.createElement('p');
                productDesc.innerHTML = product.first_desc;

                productDescTextInner?.appendChild(productDesc);

                const productDesc2 = document.createElement('p');
                productDesc2.innerHTML = product.second_desc;

                productDescTextInner?.appendChild(productDesc2);

                const productDesc3 = document.createElement('p');
                productDesc3.innerHTML = product.third_desc;

                productDescTextInner?.appendChild(productDesc3);

                //set price
                let productPrice = document.querySelector('.total-sum-price') as HTMLParagraphElement;
                let totalprice = document.querySelector('.total-sum');
                
                productPrice.innerHTML = product.price.toString() + " " + "kr";
                totalprice?.appendChild(productPrice);
            };

    }
}

renderProductContent(getRing);