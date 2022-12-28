import { Ring } from '../module/ring';
import { allRings } from './productData1';
import { ringCategories } from './productData1';


// let filteredItems = new Array<Ring>(); 

// function checkCategory(ring: string){
//     for (let category of ringCategories){
        
//         if(getRingType == category){
//             filteredItems = allRings.filter((item )=> {
//                 return item.ringType == getRingType;
//             });
//         };
//     };
//     renderProducts(filteredItems);
//     console.log("funka");
// };

// function renderProducts(ring: Ring[]){

//     for (let ring of allRings){

//         if (getRingType == ring.ringType){
//             const result = allRings.filter(res=>res.ringType);

//             console.log(result);


//             const productLink = document.createElement('a');
//             productLink.setAttribute('id', String(ring.id));
//             //productLink.setAttribute('href', "/productPage.html");
//             productLink.classList.add("product-link");
//             productContainer?.appendChild(productLink);
    
//             const product = document.createElement('div');
//             product.classList.add("product");
//             productLink?.appendChild(product);
    
//             const productImage = document.createElement('div');
//             productImage.classList.add("product__image");
//             product?.appendChild(productImage);
    
//             const productImg = document.createElement('img');
//             productImg.classList.add(ring.ringType);
//             productImage?.appendChild(productImg);
//             //productImg.src = ring.first_img;
//             productImg.setAttribute('data-productid', ring.ringType);
//             productImg.setAttribute('data-ringname', ring.name);
//             productImg.src = ring.img[0];
    
//             const productTitle = document.createElement('p');
//             productTitle.classList.add("product__title");
//             productTitle.innerHTML = ring.name;
//             product?.appendChild(productTitle);
    
//             const productPrice = document.createElement('p');
//             productPrice.classList.add("product__price");
//             productPrice.innerHTML = String(ring.price + " :-");
//             product?.appendChild(productPrice);

//     }

//     };
// };
