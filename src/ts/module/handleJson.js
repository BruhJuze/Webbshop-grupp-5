import {allRings} from './ring';

let fs = require ('./productData.json');

    fs.writeFile('./productData.json', JSON.stringify(allRings), err => {
        if(err){
            console.log(err);
        } else {
            console.log("JSON fil har lyckats skrivas!");
        }
    });
    