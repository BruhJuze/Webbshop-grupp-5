import { Cart } from "./models/cart";

let cart: Cart[] = JSON.parse(localStorage.getItem("data")!) || []; 

let prodContainer: HTMLTableSectionElement = document.getElementById("checkoutProductContainer") as HTMLTableSectionElement;
let totalPrice: HTMLDivElement = document.getElementById("totalPrice") as HTMLDivElement;
let bTag: HTMLBaseElement = document.createElement("b") as HTMLBaseElement;
let pTag: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
let pTag2: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
let intFirstName: HTMLInputElement = document.getElementById("intFirstName") as HTMLInputElement;
let intLastName: HTMLInputElement = document.getElementById("intLastName") as HTMLInputElement;
let intAddress: HTMLInputElement = document.getElementById("intAddress") as HTMLInputElement;
let intZIP: HTMLInputElement = document.getElementById("intZIP") as HTMLInputElement;
let intResidentalArea: HTMLInputElement = document.getElementById("intResidentalArea") as HTMLInputElement;
let intFirstName1: HTMLInputElement = document.getElementById("intFirstName1") as HTMLInputElement;
let intLastName1: HTMLInputElement = document.getElementById("intLastName1") as HTMLInputElement;
let intAddress1: HTMLInputElement = document.getElementById("intAddress1") as HTMLInputElement;
let intZIP1: HTMLInputElement = document.getElementById("intZIP1") as HTMLInputElement;
let intResidentalArea1: HTMLInputElement = document.getElementById("intResidentalArea1") as HTMLInputElement;
let completeBtn: HTMLButtonElement = document.getElementById("purchaseBtn") as HTMLButtonElement; 
let errorText: HTMLSpanElement = document.getElementById("errorText") as HTMLSpanElement;
let sumPrice: number = 0;
let sumofRing: number = 0;
let psuedoI: number = 0;
//href="./orderdone.html"

completeBtn.addEventListener('click', (e) => {
    if(intFirstName.value === '' || intFirstName.value == null){
        intFirstName.style.borderColor = "red";
        intFirstName.style.color = "red";
        intFirstName.placeholder="Ditt förnamn krävs";
    }
    else{
        intFirstName.style.border = "1px solid #707070";
        intFirstName.style.color = "black";
        intFirstName.placeholder="";
    }
    
    if(intLastName.value === '' || intLastName.value == null){
        intLastName.style.borderColor = "red";
        intLastName.style.color = "red";
        intLastName.placeholder="Ditt efternamn krävs";
    }
    else{
        intLastName.style.border = "1px solid #707070";
        intLastName.style.color = "black";
        intLastName.placeholder="";
    }

    if(intAddress.value === '' || intAddress.value == null){
        intAddress.style.borderColor = "red";
        intAddress.style.color = "red";
        intAddress.placeholder="Din adress krävs";
    }
    else{
        intAddress.style.border = "1px solid #707070";
        intAddress.style.color = "black";
        intAddress.placeholder="";
    }

    if(intZIP.value === '' || intZIP.value == null){
        intZIP.style.borderColor = "red";
        intZIP.style.color = "red";
        intZIP.placeholder="Ditt postnummer krävs";
    }
    else{
        intZIP.style.border = "1px solid #707070";
        intZIP.style.color = "black";
        intZIP.placeholder="";
    }

    if(intResidentalArea.value === '' || intResidentalArea.value == null){
        intResidentalArea.style.borderColor = "red";
        intResidentalArea.style.color = "red";
        intResidentalArea.placeholder="Din ort krävs";
    }
    else{
        intResidentalArea.style.border = "1px solid #707070";
        intResidentalArea.style.color = "black";
        intResidentalArea.placeholder="";
    }

    if(intFirstName1.value === '' || intFirstName1.value == null){
        intFirstName1.style.borderColor = "red";
        intFirstName1.style.color = "red";
        intFirstName1.placeholder="Ditt förnamn krävs";
    }
    else{
        intFirstName1.style.border = "1px solid #707070";
        intFirstName1.style.color = "black";
        intFirstName1.placeholder="";
    }
    
    if(intLastName1.value === '' || intLastName1.value == null){
        intLastName1.style.borderColor = "red";
        intLastName1.style.color = "red";
        intLastName1.placeholder="Ditt efternamn krävs";
    }
    else{
        intLastName1.style.border = "1px solid #707070";
        intLastName1.style.color = "black";
        intLastName1.placeholder="";
    }

    if(intAddress1.value === '' || intAddress1.value == null){
        intAddress1.style.borderColor = "red";
        intAddress1.style.color = "red";
        intAddress1.placeholder="Din adress krävs";
    }
    else{
        intAddress1.style.border = "1px solid #707070";
        intAddress1.style.color = "black";
        intAddress1.placeholder="";
    }

    if(intZIP1.value === '' || intZIP1.value == null){
        intZIP1.style.borderColor = "red";
        intZIP1.style.color = "red";
        intZIP1.placeholder="Ditt postnummer krävs";
    }
    else{
        intZIP1.style.border = "1px solid #707070";
        intZIP1.style.color = "black";
        intZIP1.placeholder="";
    }

    if(intResidentalArea1.value === '' || intResidentalArea1.value == null){
        intResidentalArea1.style.borderColor = "red";
        intResidentalArea1.style.color = "red";
        intResidentalArea1.placeholder="Din ort krävs";
    }
    else{
        intResidentalArea1.style.border = "1px solid #707070";
        intResidentalArea1.style.color = "black";
        intResidentalArea1.placeholder="";
    }
    if(intFirstName.value !== '' && intFirstName.value != null && intLastName.value !== '' && intLastName.value != null && intAddress.value !== '' && intAddress.value != null && intAddress.value !== '' && intAddress.value != null && intZIP.value !== '' && intZIP.value != null && intResidentalArea.value !== '' && intResidentalArea.value != null && intFirstName1.value !== '' && intFirstName1.value != null && intLastName1.value !== '' && intLastName1.value != null && intAddress1.value !== '' && intAddress1.value != null && intAddress1.value !== '' && intAddress1.value != null && intZIP1.value !== '' && intZIP1.value != null && intResidentalArea1.value !== '' && intResidentalArea1.value != null && cart.length == 0){
        alert("Du har ingen vara i kundvagnen")
    }

if (intFirstName.value !== '' && intFirstName.value != null && intLastName.value !== '' && intLastName.value != null && intAddress.value !== '' && intAddress.value != null && intAddress.value !== '' && intAddress.value != null && intZIP.value !== '' && intZIP.value != null && intResidentalArea.value !== '' && intResidentalArea.value != null && intFirstName1.value !== '' && intFirstName1.value != null && intLastName1.value !== '' && intLastName1.value != null && intAddress1.value !== '' && intAddress1.value != null && intAddress1.value !== '' && intAddress1.value != null && intZIP1.value !== '' && intZIP1.value != null && intResidentalArea1.value !== '' && intResidentalArea1.value != null && cart.length != 0){
    location.href = "./orderdone.html";
    //console.log(selectedItem);
    localStorage.removeItem("data");  
}
else if(intFirstName.value === '' || intFirstName.value == null || intLastName.value === '' || intLastName.value == null || intAddress.value === '' || intAddress.value == null || intAddress.value === '' || intAddress.value == null || intZIP.value === '' || intZIP.value == null || intResidentalArea.value === '' || intResidentalArea.value == null || intFirstName1.value === '' || intFirstName1.value == null || intLastName1.value === '' || intLastName1.value == null || intAddress1.value === '' || intAddress1.value == null || intAddress1.value === '' || intAddress1.value == null || intZIP1.value === '' || intZIP1.value == null || intResidentalArea1.value === '' || intResidentalArea1.value == null && cart.length != 0)
{
    alert("Snälla fyll i alla rutor");
}

    
    
})


export function renderCheckoutContent(){

    if(cart.length !==0) {
        console.log(cart.length);

        prodContainer.innerHTML = "";

         for  (let checkoutItem of cart) {
            console.log(cart.length);
            psuedoI +=1;
            if(2 > psuedoI){
                sumPrice = 0;
            }
            

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

            amountAdd.addEventListener('click', () => {
                checkoutItem.item += 1;
                localStorage.setItem("data", JSON.stringify(cart));
                psuedoI = 0;
            })
            

            amountAdd.addEventListener('click', renderCheckoutContent);

            if(checkoutItem.item >= 2){
            amountSub.addEventListener('click', () => {
                checkoutItem.item -= 1;
                localStorage.setItem("data", JSON.stringify(cart));
                psuedoI = 0;
            })
            amountSub.addEventListener('click', renderCheckoutContent);
        }
        else{
            amountSub.style.filter = "brightness(85%)";
        }


            sumPrice += checkoutItem.price * checkoutItem.item;
            sumofRing = checkoutItem.price * checkoutItem.item;

            title.innerHTML = checkoutItem.name;
            image.src = checkoutItem.img;
            pricePerThing.innerHTML = checkoutItem.price.toString() + " " + "kr/st";
            sum.innerHTML = sumofRing.toString() + " " + "kr";
            amountNumber.innerHTML = JSON.stringify(checkoutItem.item);
            
            pTag.innerHTML = sumPrice + " kr";
            pTag2.innerHTML = 150 + " kr";
            bTag.innerHTML = sumPrice + 150 + " kr";

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
            totalPrice.appendChild(pTag);
            totalPrice.appendChild(pTag2);
            totalPrice.appendChild(bTag);
            
            prodContainer.appendChild(newProduct);

        }

     }
 }

    

renderCheckoutContent();

function removeCheckoutItem(id: number){
    let selectedItem = id;
    cart = cart.filter( (x) =>  x.id != selectedItem);
    localStorage.setItem("data", JSON.stringify(cart));
    sumPrice = 0;
    renderCheckoutContent();
}




