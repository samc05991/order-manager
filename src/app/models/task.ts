import { Customer } from './customer';

export class Task {
    customer: Customer;
    sequence: string;
    task: string;
    time: string;
    status: string;

    constructor(data: any = {}) {
        this.sequence = data.sequence;
        this.task = data.task;
        this.customer = data.customer;
        this.time = data.time;
        this.status = data.status || 'incomplete';
    }
}
