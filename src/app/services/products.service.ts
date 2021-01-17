import { Injectable } from '@angular/core';
import products from '../data/products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    /**
     * Returns a list of available sandwiches
     * @returns {Product[]}
     */
    getAvailableSandwiches(): Product[] {
        return products.sandwiches.map((sandwich: any) => new Product(sandwich));
    }
}
