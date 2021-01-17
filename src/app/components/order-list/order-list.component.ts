import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
    tasks: Task[] = [];

    /**
     * @param {OrdersService} ordersService
     */
    constructor(private ordersService: OrdersService) {}

    /**
     * Initialise tasks
     * @returns {void}
     */
    ngOnInit(): void {
        this.tasks = this.ordersService.getTasks();
    }

    /**
     * Add a break for the employee
     * @returns {void}
     */
    takeBreak(): void {
        this.ordersService.takeBreak();
    }

    /**
     * @param {Task} task
     */
    updateTask(task: Task): void {
        task.status = task.status === 'complete' ? 'incomplete' : task.status;
        task.status = task.status === 'incomplete' ? 'complete' : task.status;
    }

    /**
     * @return {string[]}
     * @param {Task}
     */
    getIcon(task: Task): string[] {
        if (task.status === 'complete') {
            return ['fas', 'fa-check-square'];
        }
        if (task.status === 'break') {
            return ['fas', 'fa-coffee'];
        }

        // default incomplete
        return ['far', 'fa-check-square'];
    }
}
