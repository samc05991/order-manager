import { Customer } from './customer';
import { Product } from './product';

export class Order {
    recipient: Customer;
    products: Product[] = [];

    constructor(products: Product[], recipient: Customer) {
      this.recipient = new Customer(recipient);
      this.products = products;
    }
}
