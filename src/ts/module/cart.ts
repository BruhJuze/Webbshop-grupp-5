export class Cart {
    constructor (
        public id: number,
        public name: string,
        public price: number,
        public carat: string,
        public img: string,
        public item: number = 0
        ) {}

}