import { allRings, ringCategories } from "./models/productData";
import { Ring } from "./models/ring";
import { Cart } from "./models/cart";


const addToCartButton = document.querySelector('.addToCart-btn');

const presentURL = new URL(window.location.href);

function getRingId() {

    const getRingId = presentURL.searchParams.get("name");

    return getRingId;
}

const dashIconContainer = document.querySelector('.dash-icon-container');

let cart: Array<{ id: string, item: number, price: number, totalPrice: number}> = JSON.parse(localStorage.getItem("data")!) || [];

let searchItem: number;  


const ringID = getRingId() as string;

//console.log(ringID);

addToCartButton?.addEventListener('click', () => {

    console.log(ringID);

});

function addToCart(id: string){

}