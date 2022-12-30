import { allRings, ringCategories } from "./module/productData";
import { Ring } from "./module/ring";


const addToCartButton = document.querySelector('.addToCart-btn');


function getRingId() {
    const presentURL = window.location.href;

    const ringURL = new URLSearchParams(presentURL);

    //console.log(ringURL);

    // for (let ring of allRings){

    // }
}

const getRing: string = "Miranda";

const productInfoReadMoore = document.querySelector('.product-info__readMore');

//let cart:{id: string, item: number} [];

let cart: Array<{ id: string, item: number}> = [

  ]

//let cart: Array<string | number>

let searchItem: number;  


function addToCart(getRing: string){    

    let ring = getRing; 

    for (let ring of allRings) {
        if(getRing == ring.name) {
            //console.log(ring.name);

            let search = cart.find( (x) => x.id === ring.name);
       
            if(search === undefined){
                cart.push({
                    id: ring.name,
                    item: 1
                });
            } else {
                search.item += 1;
                console.log(searchItem);
            }
        };
    }
    console.log(cart);
    //update();
}

addToCartButton?.addEventListener('click', () => {

    addToCart(getRing);
    //getRingId();

});

productInfoReadMoore?.addEventListener('click', () => {
    removeFromCart(getRing);
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
    console.log(cart);
    //update();
}



function update(){
    console.log(searchItem);
}