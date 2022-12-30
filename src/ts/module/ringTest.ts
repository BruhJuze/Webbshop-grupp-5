export class Ring {
    constructor (
        public id: string, 
        public ringType:string, 
        public name: string, 
        public first_desc: string, 
        public second_desc: string, 
        public third_desc: string, 
        public img: Array<string> = [], 
        public price: number,
        public totalPrice: number
        ){}
}