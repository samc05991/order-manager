export class Product {
    name: string;
    image?: string;
    selected = false;

    constructor(data: any) {
        this.name = data.name;
        this.image = data.image;
    }
}
