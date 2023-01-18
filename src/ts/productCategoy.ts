import { allRings, ringCategories } from "./models/productData";
import { Ring } from "./models/ring";

let filteredItems = new Array<Ring>(); 

const presentURL = window.location.href;

const ringURL = new URLSearchParams(presentURL);

let ringTypeKey: string = "";

for (const key of ringURL.keys()){
   ringTypeKey = key; 
}

const getRing: string = ringURL.get(ringTypeKey)|| '{}';

checkCategory(getRing);

function checkCategory(ring: string){

    for (let category of ringCategories){
        
        if(getRing == category){
            filteredItems = allRings.filter((item )=> {
                return item.ringType == getRing;
            });
        };
    };

};

const productContainer = document.getElementById('product-container');

function renderPageTitle(ringType: string) {

    let contentType; 
    
    switch (ringType) {
        case 'solitar' : 
            contentType = "Solitärringar";
            break;
        case 'halo' : 
            contentType = "Halorringar";
            break;
        case 'tresten' : 
            contentType = "Trestensringar";
            break;
        case 'sidosten' : 
            contentType = "Sidostensringar";
            break;
        case 'slata' : 
            contentType = "Släta ringar";
            break;
        case 'allians' : 
            contentType = "Alliansringar";
            break;

            default: 
                contentType = "";
    }

    const subheaderTitle = document.querySelector('.subheader__title') as HTMLHeadElement;

    subheaderTitle.innerHTML = contentType;
}


function renderCategoryText(ringType: string){
    let contentTitle; 
    let contentText; 
    
    switch (ringType) {
        case 'solitar' : 
            contentTitle = "Vad är en solitärring?";
            contentText = "En solitärring är en diamantring som ofta används som förlovningsring eller vigselring. Vårt flexibla sortiment tillåter möjligheten att infatta majoriteten av våra diamantringar med alla olika former av diamant. Välj en förvald diamant som handplockats av en expert, eller sök efter diamanter i vår unika databas. De flesta ringarna går att få med alla typer av stenar, alltså prinsesslipade, runda eller varför inte smaragdslipade diamanter. Hittar ni mot förmodan inte vad ni letar efter här så kan vi tillsammans med er arbeta fram en helt unik design. Våra solitärringar går att få i de flesta vanliga ädelmetaller och mot beställning exempelvis i 14k vitguld. Vi förstår att det kan vara knepigt att välja rätt diamantstorlek och kvalitet, därför erbjuder vi öppet köp samt möjlighet att få hjälp av oss via telefon, mail eller chatt.";
            break;
        case 'halo' : 
            contentTitle = "Vad är en halorring?";
            contentText = "Här har vi samlat våra haloringar. Önskar ni designa en egen haloring kan vi självklart bistå med det. Välj mittdiamant direkt i vallistan på respektive ringskena eller genom vår sökfunktion, alla sidostenar ingår i priset som anges. Haloringar ökar i popularitet och inte minst bland kändisar och kungligheter. Ringformen har dock funnits sedan 1920-talet när Art Deco blomstrade. Den här typen av förlovningsring finns i en stor variation av designs och är ett bra val om du önskar skapa en illusion av en stor centerdiamant. Upptäck klassiska förlovningsringar med halo, eller skapa något helt unikt med hjälp av färg och form.";
            break;
        case 'tresten' : 
            contentTitle = "Vad är en trestensring?";
            contentText = "En trestensring är en ring med tre diamanter. Vanligast är att man har en diamant i mitten som är större och sedan två mindre diamanter på vardera sida. En trestensring passar den som vill ha en elegant förlovningsring som drar ögonen till sig. Trestensringen har en symbolisk betydelse där vardera diamant står för ”the past, the present and the future”. Våra ringar tillverkas per standard i 18K gulguld, roséguld och vitguld samt 950 platina."
            break;
        case 'sidosten' : 
            contentTitle = "Vad är en sidostensring?";
            contentText = "En sidostensring är en diamantring med ett flertal mindre diamanter som är infattade i ringens skena. En sidostenring passar den som söker en gnistrande förlovningsring eller vigselring. Det är populärt att kombinera en sidostensring med en alliansring, tillsammans skapar duon en skinande kombination som ständigt glittrar. Välj centerdiamant och metal för att addera en personlig touch. Våra ringar tillverkas per standard i 18K gulguld, vitguld, roséguld och 950 platina. Vi kan även skapa ringen i palladium eller vitguld per förfrågan. Sidostenarna ingår i det pris som anges.";
            break;
        case 'slata' : 
            contentTitle = "Vad är en slät vigselring?";
            contentText = "Att välja en slät ring som vigselring är det mest klassiska valet. En slät ring låter metallen stå i centrum och utgör ett sofistikerat uttryck i kombination med en förlovningsring. Diamonds For You erbjuder flertalet designs av släta ringar. Välj mellan 18K gulguld, vitguld, roséguld eller 950 Platina. Vid önskemål kan även ringen skapas i 18K rödguld eller palladium.";
            break;
        case 'allians' : 
            contentTitle = "Vad är en alliansring?";
            contentText = "Hos Diamonds For You finner ni nu ett brett utbud av alliansringar tillverkade i guld och platina. Alliansringar är från början en ring som främst användes vid jubileum och symboliserar den eviga alliansen mellan två älskare. Historien reflekterar även det faktum att en alliansring är infattade med diamanter längs hela ringens skena, vilket representerar att evig kärlek inte har ett slut. En alliansring är ett populärt val som vigselring, men även förlovningsring. Samtliga alliansringar går att få i både halvallians och helallians, alternativt exempelvis 1/3 eller 3/4 diamantklädd skena. Önskar ni andra än runda stenar som prinsesslipade diamanter i er alliansring så kan vi ordna det.";
            break;

            default: 
                contentTitle = "";
                contentText = "";
    }

    const categoryTextFirst = document.getElementById("category-text-1") as HTMLHeadElement;
    const categoryTextSec = document.getElementById("category-text-2") as HTMLParagraphElement;

    categoryTextFirst.innerHTML = contentTitle;
    categoryTextSec.innerHTML = contentText;
}
renderCategoryText(getRing);


function renderProducts(ring: Ring[]){

    let getRingName: string = ""; 

    let ringNameURL = new URL(window.location.href);

    for (let ring of allRings){

        if (getRing == ring.ringType){
            const result = allRings.filter(res=>res.ringType);

            const productLink = document.createElement('a');
            productLink.setAttribute('id', String(ring.id));
            productLink.setAttribute('href', String("/pages/productPage.html"));
            productLink.setAttribute('data-ringname', ring.name);
            productLink.classList.add("product-link");
            productLink.addEventListener('click', (event)=> {
                event.preventDefault();

                let currentItem = event.target as HTMLAnchorElement; 
                let currentHref= productLink.getAttribute('href') || "";

                console.log(currentHref);

                const dataAttributeRingName = currentItem.getAttribute("data-ringname") || '{}';

                console.log(dataAttributeRingName);
                const dataAttributeHref = currentHref + "?";

                console.log(dataAttributeHref);

                ringNameURL.searchParams.set("name", dataAttributeRingName);
                
                const newQuery = ringNameURL.toString();

                history.pushState(null, "", newQuery); 

                getRingName =  ringNameURL.searchParams.get("name") || '{}';
                const getRingEntries =  ringNameURL.searchParams.entries();

                let ringNameKey: string = "";

                for (const key of ringNameURL.searchParams.keys()){
                    ringNameKey = key; 
                }

                console.log(ringNameKey);
                
                window.location.href = dataAttributeHref + ringNameKey +"=" +dataAttributeRingName;
            });

            productContainer?.appendChild(productLink);

            const product = document.createElement('div');
            product.classList.add("product");
            productLink?.appendChild(product);
    
            const productImage = document.createElement('div');
            productImage.classList.add("product__image");
            product?.appendChild(productImage);
    
            const productImg = document.createElement('img');
            productImg.classList.add(ring.ringType);
            productImg.classList.add("product-links");
            productImage?.appendChild(productImg);
            productImg.setAttribute('data-productid', ring.ringType);
            productImg.setAttribute('data-ringname', ring.name);
            productImg.src = ring.img[0];
    
            const productTitle = document.createElement('p');
            productTitle.classList.add("product__title");
            productTitle.innerHTML = ring.name;
            product?.appendChild(productTitle);
    
            const productPrice = document.createElement('p');
            productPrice.classList.add("product__price");
            productPrice.innerHTML = String(ring.price + " :-");
            product?.appendChild(productPrice);

    }

    };
};


let getRingName: string = ""; 

let ringNameURL = new URL(window.location.href);

let productLinks = document.querySelectorAll('.product__title');

renderProducts(filteredItems);

renderPageTitle(getRing);

// Alert för visa mer knapp

const loadMore = document.getElementById("load-btn");
loadMore?.addEventListener("click", ()=> {
        alert("Det finns inte några fler produkter att visa!")
    });