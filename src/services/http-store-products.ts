import { iProduct } from '../models/product';

export class CartHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3500/products/';
    }

    getAllProducts(): Promise<Array<iProduct>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }
}
