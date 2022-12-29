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

    //subheaderTitle.innerHTML = contentType;


}

const productImageContainer = document.querySelector('.product-image-container');
const mainImage = document.querySelector('.main-img');
const productImgSmallGroup = document.querySelector('.small-group');
const productInfoTitle = document.querySelector('.product-info__title');
const productInfoText = document.querySelector('.product-info__text');
const productDescTextInner = document.querySelector('.product-desc__text__inner');
const productImages = document.querySelector('.product-images');
let selectDiamond = document.getElementById('diamond') as HTMLSelectElement;
let selectCarat = document.getElementById('carat') as HTMLSelectElement;
let thisProductPrice:number; 

function renderProductContent(){

    for (let product of allRings){

        const getProduct = "Andrea";

            if(getProduct == product.name){

                    console.log(product.name);
                    
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
                
                thisProductPrice = product.price;

                productPrice.innerHTML = thisProductPrice.toString() + " " + "kr";
                totalprice?.appendChild(productPrice);

                //diamond price
                selectDiamond.addEventListener('change', ()=> {

                    let valueDiamond = selectDiamond.value;
                    let newValueDiamond: number = +valueDiamond;
                    let totalSumDiamond = newValueDiamond * thisProductPrice;
                    let sumDiamond = totalSumDiamond;

                    productPrice.innerHTML = sumDiamond + " " + "kr";
                    console.log(totalSumDiamond);
                    return totalSumDiamond;
                });
                //carat price
                selectCarat.addEventListener('change', ()=> {

                    let valueCarat = selectCarat.value;
                    let newValueCarat: number = +valueCarat;                
                    let totalSumCarat = newValueCarat * thisProductPrice;
                    let sumCarat = totalSumCarat;

                    productPrice.innerHTML = sumCarat + " " + "kr";                
                    console.log(totalSumCarat);
                    return totalSumCarat;
                });
            }
    }
}


function totalsum(totalsum:number, totalprice:number){
   let ringPrice = totalsum + totalprice;

   console.log(ringPrice);
   
}



renderProductContent();


// class Carat{
//     constructor(public size:string, public price: number){};
// }

// let carat0 = new Carat("0", 0);
// let carat1 = new Carat("0.25", 2000);
// let carat2 = new Carat("0.30", 4000);
// let carat3 = new Carat("0.40", 6000);
// let carat4 = new Carat("0.50", 8000);
// let carat5 = new Carat("0.60", 10000);
// let carat6 = new Carat("0.70", 12000);
// let carat7 = new Carat("0.80", 14000);
// let carat8 = new Carat("0.90", 16000);
// let carat9 = new Carat("1.00", 18000);

// let allCarats = [carat0, carat1, carat2, carat3, carat4, carat5, carat6, carat7, carat8, carat9]