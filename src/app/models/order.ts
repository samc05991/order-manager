import { Customer } from "./customer"

export class Order {
    id: number = 0;
    time: string = '';
    task: string = '';
    recipient: Customer;

    constructor(data = {}, recipient: Customer) {
      Object.assign(this, data);

      this.recipient = recipient;
    }
}
