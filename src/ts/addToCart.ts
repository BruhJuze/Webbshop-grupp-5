// import { allRings, ringCategories } from "./module/productData";
// import { Ring } from "./module/ring";
// import { Cart } from "./module/cart";
// import { getRing, getRingId } from "./productPage";

// const presentURL = new URL(window.location.href);
// const dashIconContainer = document.querySelector('.dash-icon-container');

// let cart: Array<{ id: number, name: string, item: number, price: number, totalPrice: number}> = JSON.parse(localStorage.getItem("data")!) || []; 

// const ringID = getRingId;

// dashIconContainer?.addEventListener('click', () => {
//    console.log("funkar minus");
// })

// function  removeFromCart(id: number) {
//         let selectedItem = id;
//         cart = cart.filter( (x) => x.id != selectedItem);
//         localStorage.setItem("data", JSON.stringify(cart));
// }

// function update(id: number){
//     let search = cart.find((x)=> x.id === id) !;
//     addAllGoods();
// }

// function addAllGoods() {
//     let cartQuantity = document.getElementById('cart-quantity');
//     cartQuantity = 0 || null;
// }

// const cartContainer = document.getElementById('cart-container') as HTMLElement;

// let sumCarat: number;


// const cartButton = document.querySelector('.cart-button');

// function renderCartItems(){

//     if(cart.length !==0){

//         cartContainer.innerHTML = "";

//         for (let product of cart){
//             console.log(getRingId);

//             //for(let ring of allRings){
//             for(let ring = 0; ring < allRings.length; ring++){

//                 if(product.name === allRings[ring].name){
                
//                     const cartProduct = document.createElement('div');
//                     cartProduct.classList.add("cart-product");
//                     cartProduct.setAttribute('id', String(allRings[ring].name));
//                     cartContainer?.appendChild(cartProduct);

//                     const cartProductImg = document.createElement('img');
//                     cartProductImg.classList.add("cart-product__img");
//                     cartProduct.appendChild(cartProductImg);
//                     cartProductImg.src = allRings[ring].img[0];

//                     const cartContent = document.createElement('div');
//                     cartContent.classList.add("cart-content");
//                     cartProduct.appendChild(cartContent);

//                     const cartContentLeft = document.createElement('div');
//                     cartContentLeft.classList.add("cart-content__left");
//                     cartContent.appendChild(cartContentLeft);

//                     const cartContentTitle = document.createElement('div');
//                     cartContentTitle.classList.add("cart-content-title");
//                     cartContentLeft.appendChild(cartContentTitle);
//                     const cartParagraph = document.createElement('p');
//                     cartParagraph.innerHTML = allRings[ring].name;
//                     cartContentTitle.appendChild(cartParagraph);

//                     const cartContentLeftAddRemove = document.createElement('div');
//                     cartContentLeftAddRemove.classList.add("cart-content__left__addRemove");
//                     cartContentLeft.appendChild(cartContentLeftAddRemove);
//                     const dashIconContainer = document.createElement('div');
//                     dashIconContainer.classList.add("dash-icon-container");
//                     dashIconContainer.innerHTML = `<i class="bi bi-dash-square"></i>`;
//                     cartContentLeftAddRemove.appendChild(dashIconContainer);
//                     const cartQuantity = document.createElement('div');
//                     cartQuantity.classList.add("cart-quantity");
//                     cartQuantity.innerHTML = String(product.item);
//                     cartContentLeftAddRemove.appendChild(cartQuantity);
//                     const plusIconContainer = document.createElement('div');
//                     plusIconContainer.classList.add("plus-icon-container");
//                     plusIconContainer.innerHTML = `<i class="bi bi-plus-square"></i>`;

//                     cartContentLeftAddRemove.appendChild(plusIconContainer);

//                     const cartContentRight = document.createElement('div');
//                     cartContentRight.classList.add("cart-content__right");
//                     cartContent.appendChild(cartContentRight);

//                     const deleteProductBtn = document.createElement('div');
//                     deleteProductBtn.classList.add("delete-product-btn");
//                     deleteProductBtn.innerHTML = ` <i class="bi bi-x"></i>`;
//                     cartContentRight.appendChild(deleteProductBtn);

//                     const cartContentPrice = document.createElement('div');
//                     cartContentPrice.classList.add("cart-content__price");

//                     let productPrice = document.querySelector('.total-sum-price') as HTMLParagraphElement;
//                     let selectCarat = document.getElementById('carat') as HTMLSelectElement;

//                     cartContentPrice.innerHTML = allRings[ring].totalPrice.toString() + " " + "kr";
//                     cartContentRight.appendChild(cartContentPrice); 
//                     //let sumCarat: number;

//                     let thisCaratPrice: number; 

//                     let currentCartProduct = document.getElementById(allRings[ring].name) as HTMLElement;

//                     if(allRings[ring].name == currentCartProduct.id){

//                     plusIconContainer.addEventListener('click', () => {
//                         //addToCart(ringID);
//                         console.log("addera");
//                     });
//                 };

//                }
//             }
//         }

//     } else {
//         const emptyCartContainer= document.createElement('div');
//         emptyCartContainer.classList.add('empty-cart-container');
//         cartContainer?.appendChild(emptyCartContainer );
//     }
// }

// renderCartItems();


