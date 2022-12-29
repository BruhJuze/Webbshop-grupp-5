import { allRings, ringCategories } from "./module/productData";
import { Ring } from "./module/ring";


const addToCartButton = document.querySelector('.addToCart-btn');

const presentURL = new URL(window.location.href);

function getRingId() {

    const getRingId = presentURL.searchParams.get("name");

    return getRingId;
}

const dashIconContainer = document.querySelector('.dash-icon-container');

let cart: Array<{ id: string, item: number}> = JSON.parse(localStorage.getItem("data")!) || [];

let searchItem: number;  


// function addToCart(getRingId: string){    

//     //console.log(getRingId);

//     let ring = getRingId; 
 
//     for (let ring of allRings) {
//         if(getRingId == ring.name) {
//             //console.log(ring.name);

//             let search = cart.find( (x) => x.id === ring.name);
       
//             if(search === undefined){
//                 cart.push({
//                     id: ring.name,
//                     item: 1
//                 });
//             } else {
//                 search.item += 1;
//             }
//         };
//     }
//     localStorage.setItem("data", JSON.stringify(cart));
//     update(getRingId);
//     renderCartItems();
// }

const ringID = getRingId() as string;

//console.log(ringID);

addToCartButton?.addEventListener('click', () => {

    addToCart(ringID);

    //console.log(ringID);
});

dashIconContainer?.addEventListener('click', () => {
   // removeFromCart(getRingId);
   console.log("funkar minus");
})

function  removeFromCart(getRing: string) {

    for (let ring of allRings) {
        if(getRing == ring.name) {
            console.log(ring.name);

            let search = cart.find( (x) => x.id === ring.name);
       
            if(search?.item ===  undefined || 0) return; //Få hjälp med negativt värde
            else {
                search.item -= 1;
            }
        };
    }
    localStorage.setItem("data", JSON.stringify(cart));
    //update(getRingId);
}

function update(id: string){
    let search = cart.find((x)=> x.id === id) !;
    addAllGoods();
}

function addAllGoods() {
    let cartQuantity = document.getElementById('cart-quantity');
    cartQuantity = 0 || null;
    //cartQuantity.innerHTML = cart.map((x)=>x.item).reduce((x,y) => x + y , 0).toString();  //look why cartQuantity is possible null
    //onsole.log(cart.map((x)=>x.item).reduce((x,y) => x + y , 0));
}

const cartContainer = document.getElementById('cart-container') as HTMLElement;

function renderCartItems(){

    if(cart.length !==0){

        cartContainer.innerHTML = "";

        for (let product of cart){
            //console.log(product.id);

            for(let ring of allRings){

                if(product.id === ring.name){
                
                    const cartProduct = document.createElement('div');
                    cartProduct.classList.add("cart-product");
                    cartContainer?.appendChild(cartProduct);

                    const cartProductImg = document.createElement('img');
                    cartProductImg.classList.add("cart-product__img");
                    cartProduct.appendChild(cartProductImg);
                    cartProductImg.src = ring.img[0];

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
                    cartParagraph.innerHTML = ring.name;
                    cartContentTitle.appendChild(cartParagraph);

                    const cartContentLeftAddRemove = document.createElement('div');
                    cartContentLeftAddRemove.classList.add("cart-content__left__addRemove");
                    cartContentLeft.appendChild(cartContentLeftAddRemove);
                    const dashIconContainer = document.createElement('div');
                    dashIconContainer.classList.add("dash-icon-container");
                    dashIconContainer.innerHTML = `<i class="bi bi-dash-square"></i>`;
                    dashIconContainer.addEventListener('click', ()=> {
                        console.log("funka minus");
                    });
                    cartContentLeftAddRemove.appendChild(dashIconContainer);
                    const cartQuantity = document.createElement('div');
                    cartQuantity.classList.add("cart-quantity");
                    cartQuantity.innerHTML = String(product.item);
                    cartContentLeftAddRemove.appendChild(cartQuantity);
                    const plusIconContainer = document.createElement('div');
                    plusIconContainer.classList.add("plus-icon-container");
                    plusIconContainer.innerHTML = `<i class="bi bi-plus-square"></i>`;
                    plusIconContainer.addEventListener('click', () => {
                        addToCart(ringID);
                    });
                    cartContentLeftAddRemove.appendChild(plusIconContainer);

                    const cartContentRight = document.createElement('div');
                    cartContentRight.classList.add("cart-content__right");
                    cartContent.appendChild(cartContentRight);

                    const deleteProductBtn = document.createElement('div');
                    deleteProductBtn.classList.add("delete-product-btn");
                    deleteProductBtn.innerHTML = ` <i class="bi bi-x"></i>`;
                    cartContentRight.appendChild(deleteProductBtn);

                    const cartContentPrice = document.createElement('div');
                    cartContentPrice.classList.add("cart-content__price");
                    cartContentPrice.innerHTML = String(ring.price +" kr");
                    cartContentRight.appendChild(cartContentPrice);

                }
            }
        }

    } else {
        const emptyCartContainer= document.createElement('div');
        emptyCartContainer.classList.add('empty-cart-container');
        cartContainer?.appendChild(emptyCartContainer );
    }
}

function addToCart(getRingId: string){    

    //console.log(getRingId);

    let ring = getRingId; 
 
    for (let ring of allRings) {
        if(getRingId == ring.name) {
            //console.log(ring.name);

            let search = cart.find( (x) => x.id === ring.name);
       
            if(search === undefined){
                cart.push({
                    id: ring.name,
                    item: 1
                });
            } else {
                search.item += 1;
            }
        };
    }
    localStorage.setItem("data", JSON.stringify(cart));
    update(getRingId);
    renderCartItems();
}

renderCartItems();