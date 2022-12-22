export class Ring {
    id: string;
    ringType: string; 
    name: string;
    first_desc: string;
    second_desc: string;
    third_desc: string;
    img: string [];
    price: number;

    constructor (id: string, ringType: string, name: string, first_desc: string, second_desc: string, third_desc: string, img: Array<string> = [], price: number ){
        this.id = id;
        this.ringType = ringType;
        this.name = name;
        this.first_desc = first_desc;
        this.second_desc = second_desc;
        this.third_desc = third_desc;
        this.img = img; 
        this.price = price;
    }

}