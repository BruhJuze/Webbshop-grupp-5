import { allRings, ringCategories } from "./module/productData";
import { Ring } from "./module/ring";

let prodContainer: HTMLTableSectionElement = document.getElementById("checkoutProductContainer") as HTMLTableSectionElement;
let totalPrice: HTMLDivElement = document.getElementById("totalPrice") as HTMLDivElement;
let bTag: HTMLBaseElement = document.createElement("b") as HTMLBaseElement;
let totalSum: number = 0;

export function renderCheckoutContent(){

    if(cart.length !==0) {

        prodContainer.innerHTML = "";

         for  (let checkoutItem of cart) {

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

            title.innerHTML =checkoutItem.name;
            image.src = checkoutItem.img;
            pricePerThing.innerHTML = checkoutItem.price.toString() + " " + "kr";
            sum.innerHTML = checkoutItem.price * checkoutItem.item + " " + "kr";

            // amountNumber.innerHTML = "1";

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
