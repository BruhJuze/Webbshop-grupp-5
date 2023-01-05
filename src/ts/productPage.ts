import { allRings } from "./module/productData";
import { Ring } from "./module/ring";
import { Cart } from "./module/cart";


let filteredItems = new Array<Ring>(); 

const presentURL = window.location.href;

const ringURL = new URLSearchParams(presentURL);

let ringTypeKey: string = "";

for (const key of ringURL.keys()){
   ringTypeKey = key; 
}

export const getRing: string = ringURL.get(ringTypeKey)|| '{}';

export let getRingId: number;

const productContainer = document.getElementById('product-container');
let testValue: number; 

const productImageContainer = document.querySelector('.product-image-container');
const mainImage = document.querySelector('.main-img');
const productImgSmallGroup = document.querySelector('.small-group');
const productInfo = document.querySelector('.product-info');
const productInfoTitle = document.querySelector('.product-info__title');
const productInfoText = document.querySelector('.product-info__text');
const productDescTextInner = document.querySelector('.product-desc__text__inner');
const productImages = document.querySelector('.product-images');
let selectDiamond = document.getElementById('diamond') as HTMLSelectElement;
let selectCarat = document.getElementById('carat') as HTMLSelectElement;

let thisProductPrice: number; 

let sumCarat; 

function renderProductContent(product: string){

    for (let product of allRings){

        //const getProduct = ring;

            if(getRing == product.name){
                    
                //create main img
                const productImg = document.createElement('img');
                productImg.setAttribute('id', String("main-img"));
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

                productInfo?.setAttribute('id', String(product.id));

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

                getRingId = product.id;
    
            }
    }
}


renderProductContent(getRing);

const addToCartButton = document.querySelector('.addToCart-btn');

let cart: Cart[] = JSON.parse(localStorage.getItem("data")!) || []; 

let cartItemCounter: number;

addToCartButton?.addEventListener('click', ()=> {

    for (let product of allRings){

            if(getRingId == product.id){

                let cartItem = new Cart(product.id, product.name, product.price, "carat", product.img[0], 1);

                let search = cart.find( (x) => x.id === product.id);

                if(search === undefined) {
                    cart.push(cartItem); 
                }
                else {
                    search.item +=1; 
                }

                localStorage.setItem("data", JSON.stringify(cart));
                console.log(cart);

            };

            renderCartItems();
    };

});

const productInfoReadMe = document.querySelector('.product-info__readMore');

productInfoReadMe?.addEventListener('click', ()=> {
    console.log(cart);
});

const cartContainer = document.getElementById('cart-container') as HTMLElement;

const cartButton = document.querySelector('.cart-button');

cartButton?.addEventListener('click', renderCartItems);

export function renderCartItems(){

    if(cart.length !==0){

        cartContainer.innerHTML = "";

        for (let cartItem of cart){
            //console.log(product.id);

            //for(let ring of allRings){
           // for(let ring = 0; ring < allRings.length; ring++){

               // if(cartItem.id === allRings[ring].name){
                
                    const cartProduct = document.createElement('div');
                    cartProduct.classList.add("cart-product");
                    cartProduct.setAttribute('id', (cartItem.name));
                    cartContainer?.appendChild(cartProduct);

                    const cartProductImg = document.createElement('img');
                    cartProductImg.classList.add("cart-product__img");
                    cartProduct.appendChild(cartProductImg);
                    cartProductImg.src = cartItem.img;

                    const cartContent = document.createElement('div');
                    cartContent.classList.add("cart-content");
                    cartProduct.appendChild(cartContent);

                    const cartContentLeft = document.createElement('div');
                    cartContentLeft.classList.add("cart-content__left");
                    cartContent.appendChild(cartContentLeft);

                    const cartContentTitle = document.createElement('div');
                    cartContentTitle.classList.add("cart-content-title");
                    cartContentLeft.appendChild(cartContentTitle);
                    const cartParagraph = document.createElement('p');
                    cartParagraph.innerHTML = cartItem.name;
                    cartContentTitle.appendChild(cartParagraph);

                    const cartContentLeftAddRemove = document.createElement('div');
                    cartContentLeftAddRemove.classList.add("cart-content__left__addRemove");
                    cartContentLeft.appendChild(cartContentLeftAddRemove);
                    const dashIconContainer = document.createElement('div');
                    dashIconContainer.classList.add("dash-icon-container");
                    dashIconContainer.innerHTML = `<i class="bi bi-dash-square"></i>`;
                    dashIconContainer.addEventListener('click', ()=> {
                        let search = cart.find( (x) => x.id === cartItem.id);

                        let searchItem = search?.item;

                        //searchItem = searchItem++ || 0;
                    });
                    cartContentLeftAddRemove.appendChild(dashIconContainer);
                    const cartQuantity = document.createElement('div');
                    cartQuantity.classList.add("cart-quantity");
                    cartQuantity.innerHTML = String(cartItem.item);
                    cartContentLeftAddRemove.appendChild(cartQuantity);
                    const plusIconContainer = document.createElement('div');
                    plusIconContainer.classList.add("plus-icon-container");
                    plusIconContainer.innerHTML = `<i class="bi bi-plus-square"></i>`;
                    plusIconContainer.addEventListener('click', ()=> {
                        //incrementCartItem(cartItem.id);
                    });
    
                    cartContentLeftAddRemove.appendChild(plusIconContainer);

                    const cartContentRight = document.createElement('div');
                    cartContentRight.classList.add("cart-content__right");
                    cartContent.appendChild(cartContentRight);

                    const deleteProductBtn = document.createElement('div');
                    deleteProductBtn.classList.add("delete-product-btn");
                    deleteProductBtn.innerHTML = ` <i class="bi bi-x"></i>`;
                    deleteProductBtn.addEventListener('click', ()=> {
                        removeItem(cartItem.id);
                    });

                    cartContentRight.appendChild(deleteProductBtn);

                    const cartContentPrice = document.createElement('div');
                    cartContentPrice.classList.add("cart-content__price");

                    let productPrice = document.querySelector('.total-sum-price') as HTMLParagraphElement;
                    let selectCarat = document.getElementById('carat') as HTMLSelectElement;
                    //let sumCarat: number;

               // };

               }
            //}
        }

    } 

    // function incrementCartItem(id: number){

    //     let selectedItem = id;

    //     let search = cart.find( (x) => x.id === selectedItem);

    //     //search.item++;
    //     // for (let product of allRings){

    //     //     if(getRingId == product.id){

    //     //         let cartItem = new Cart(product.id, product.name, product.price, "carat", product.img[0], 1);

    //     //         let search = cart.find( (x) => x.id === product.id);

    //     //         if(search === undefined) {
    //     //             cart.push(cartItem); 
    //     //         }
    //     //         else {
    //     //             search.item +=1; 
    //     //         }

    //     //         localStorage.setItem("data", JSON.stringify(cart));
    //     //         console.log(cart);

    //     //     };

    //     //     renderCartItems();
    //     // };

    //     console.log(id);
        
    // }

    function decrementCartItem(id: number){
        console.log(id + "decrement");
    }

    function removeItem(id: number){
        let selectedItem = id;
        //console.log(selectedItem);
        cart = cart.filter( (x) =>  x.id != selectedItem);
        localStorage.setItem("data", JSON.stringify(cart));
        renderCartItems();
    };

