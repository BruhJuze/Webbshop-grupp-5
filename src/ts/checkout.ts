import { allRings } from "./module/productData";
import { Ring } from "./module/ring";
import { Cart } from "./module/cart";
import { getRingId } from "./productPage";

let cart: Cart[] = JSON.parse(localStorage.getItem("data")!) || []; 

let prodContainer: HTMLTableSectionElement = document.getElementById("checkoutProductContainer") as HTMLTableSectionElement;
let totalPrice: HTMLDivElement = document.getElementById("totalPrice") as HTMLDivElement;
let bTag: HTMLBaseElement = document.createElement("b") as HTMLBaseElement;
let sumPrice: number = 0;
let psuedoI: number = 0;

function renderCheckoutContent(){

    if(cart.length !==0) {
        console.log(cart.length);

        prodContainer.innerHTML = "";

         for  (let checkoutItem of cart) {
            console.log(JSON.stringify(cart));
            psuedoI +=1;

            let newProduct: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let title:HTMLElement = document.createElement("section") as HTMLElement;
            let image:HTMLImageElement = document.createElement("img") as HTMLImageElement;
            let rightContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let leftContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let leftChildContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let pricePerThing:HTMLElement = document.createElement("section") as HTMLElement;
            let amountContainer:HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let sum:HTMLElement = document.createElement("section") as HTMLElement;
            let removeBtn:HTMLElement = document.createElement("i") as HTMLElement;
            let amountAdd: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let amountSub: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let amountNumber: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            let plusIcon:HTMLElement = document.createElement("i") as HTMLElement;
            let minusIcon:HTMLElement = document.createElement("i") as HTMLElement;
            let pTag: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;

            newProduct.className = "mainCheckout__newProduct";
            title.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__title";
            image.className = "mainCheckout__newProduct__leftContainer__image";
            rightContainer.className = "mainCheckout__newProduct__rightContainer"
            leftContainer.className = "mainCheckout__newProduct__leftContainer"
            sum.className = "mainCheckout__newProduct__rightContainer__sum";
            removeBtn.className = "mainCheckout__newProduct__rightContainer__remove";
            removeBtn.className = "bi bi-x-lg";
            amountContainer.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer";
            leftChildContainer.className = "mainCheckout__newProduct__leftContainer__leftChildContainer";
            pricePerThing.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__pricePerThing";
            amountAdd.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer__sub";
            amountNumber.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer__amountNumber";
            amountSub.className = "mainCheckout__newProduct__leftContainer__leftChildContainer__amountContainer__add";
            plusIcon.className = "bi bi-plus";
            minusIcon.className = "bi bi-dash";

            removeBtn.addEventListener('click', () => {
                removeCheckoutItem(checkoutItem.id);
            })

            amountAdd.addEventListener('click', () => {
                checkoutItem.item += 1;
                localStorage.setItem("data", JSON.stringify(cart));
                psuedoI + 0;
            })

            amountAdd.addEventListener('click', renderCheckoutContent);

            if(checkoutItem.item >= 2){
            amountSub.addEventListener('click', () => {
                checkoutItem.item -= 1;
                localStorage.setItem("data", JSON.stringify(cart));
                psuedoI + 0;
            })
            amountSub.addEventListener('click', renderCheckoutContent);
        }
        else{
            amountSub.style.filter = "brightness(85%)";
        }

        let priceArray: number[] = [150, sumPrice];

            console.log(checkoutItem.price);
            sumPrice += checkoutItem.price * checkoutItem.item;

            title.innerHTML =checkoutItem.name;
            image.src = checkoutItem.img;
            pricePerThing.innerHTML = checkoutItem.price.toString() + " " + "kr/st";
            sum.innerHTML = checkoutItem.price.toString() + " " + "kr";
            amountNumber.innerHTML = JSON.stringify(checkoutItem.item);
            
            if(cart.length>=psuedoI){
                pTag.innerHTML = priceArray[psuedoI] + " kr"; ///nytt class eller barn
                bTag.innerHTML = sumPrice + 150 + " kr";
            }

            newProduct.appendChild(leftContainer);
            newProduct.appendChild(rightContainer);
            leftContainer.appendChild(image);
            leftContainer.appendChild(leftChildContainer);
            leftChildContainer.appendChild(title);
            leftChildContainer.appendChild(pricePerThing);
            leftChildContainer.appendChild(amountContainer);
            amountContainer.appendChild(amountSub);
            amountContainer.appendChild(amountNumber);
            amountContainer.appendChild(amountAdd);
            amountAdd.append(plusIcon);
            amountSub.append(minusIcon);
            rightContainer.appendChild(removeBtn);
            rightContainer.appendChild(sum);
            

            if(cart.length>=psuedoI){
            totalPrice.appendChild(pTag);
            totalPrice.appendChild(pTag);
            totalPrice.appendChild(bTag);

            }
            
            prodContainer.appendChild(newProduct);

        }

     }
 }

    

renderCheckoutContent();

function removeCheckoutItem(id: number){
    let selectedItem = id;
    //console.log(selectedItem);
    cart = cart.filter( (x) =>  x.id != selectedItem);
    localStorage.setItem("data", JSON.stringify(cart));
    renderCheckoutContent();
}




