import { allRings, ringCategories } from "./module/productData";
import { Ring } from "./module/ring";


const addToCartButton = document.querySelector('.addToCart-btn');

const presentURL = new URL(window.location.href);

function getRingId() {

    const getRingId = presentURL.searchParams.get("name");

    return getRingId;
}

const productInfoReadMoore = document.querySelector('.product-info__readMore');

let cart: Array<{ id: string, item: number}> = JSON.parse(localStorage.getItem("data")!) || [];

let searchItem: number;  


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
}

const ringID = getRingId() as string;

//console.log(ringID);

addToCartButton?.addEventListener('click', () => {

    addToCart(ringID);

    //console.log(ringID);
});

productInfoReadMoore?.addEventListener('click', () => {
   // removeFromCart(getRingId);
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

function renderCartItems(){
    
}