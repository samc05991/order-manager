import { Order } from './order';

export class Customer {
    name = '';
    orders: Order[] = [];

    constructor(data: any) {
        this.name = data.name;
    }
}
