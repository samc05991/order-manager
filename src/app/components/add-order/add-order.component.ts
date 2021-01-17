import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-add-order',
    templateUrl: './add-order.component.html',
    styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
    orderForm: FormGroup;
    sandwiches: Product[] = [];
    selectedSandwiches: Product[] = [];

    /**
     * @param {ProductsService} _productsService
     * @param {OrdersService} _ordersService
     * @param {Router} _router
     */
    constructor(
        private productsService: ProductsService,
        private ordersService: OrdersService,
        private router: Router
    ) {
        // initialise form with validators
        this.orderForm = new FormGroup({
            name: new FormControl('', Validators.required),
        });
    }

    /**
     * Makes initial request for products
     * @returns {void}
     */
    ngOnInit(): void {
        this.sandwiches = this.productsService.getAvailableSandwiches();
    }

    /**
     * Toggle a sandwich selected on the order
     * @param {Product} sandwich
     * @returns {void}
     */
    selectSandwich(sandwich: Product): void {
        sandwich.selected = !sandwich.selected;

        if (sandwich.selected) {
            this.selectedSandwiches.push(sandwich);
        } else {
            this.selectedSandwiches = this.selectedSandwiches.filter((item) => item.name !== sandwich.name);
        }
    }

    /**
     * initialize the customer and order models and send to API
     * @returns {void}
     */
    addOrder(): void {
        const customer = new Customer({name: this.orderForm.controls.name.value});
        const order = new Order(this.selectedSandwiches, customer);

        customer.orders.push(order);
        order.recipient = customer;

        this.ordersService.addOrder(order);

        this.router.navigate(['/']);
    }
}
