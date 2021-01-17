import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Customer } from '../models/customer';
import { Task } from '../models/task';
import orderData from '../data/orders.json';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    tasks: Task[] = [];

    /**
     * @returns {Task[]}
     */
    getTasks(): Task[] {
        // mocks the initial orders request
        if (!this.tasks.length) {
            this.tasks = orderData.map((order: any) => new Task({
                sequence: order.sequence,
                task: order.task,
                time: order.time,
                customer: new Customer(order.recipient)
            }));
        }

        return this.tasks;
    }

    /**
     * This is where the API request to add order would go.
     * I just pushed these to the tasks array but instead the response of the API request should set the new task
     * I havent added calculations for time yet
     * @param {Order} order
     * @return {void}
     */
    addOrder(order: Order): void {
        this.tasks.push(new Task({
            sequence: this.tasks.length + 1,
            task: `Make sandwich for ${order.recipient.name}`,
            time: '00:00',
            customer: order.recipient
        }));

        this.tasks.push(new Task({
            sequence: this.tasks.length + 1,
            task: `Serve sandwich to ${order.recipient.name}`,
            time: '00:00',
            customer: order.recipient
        }));
    }

    /**
     * This adds a specific task that is a break
     */
    takeBreak() {
        this.tasks.push(new Task({
            sequence: this.tasks.length + 1,
            task: `Take break`,
            time: '00:00',
            status: 'break'
        }));
    }
}
