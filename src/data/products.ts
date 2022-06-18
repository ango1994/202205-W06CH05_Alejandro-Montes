import { iProduct } from '../models/product';

export async function getProducts() {
    const PRODUCTS: Array<iProduct> = [
        {
            categoty: 'Cookie',
            description: 'Una deliciosa galleta de chocolate',
            id: 1,
            name: 'Chips Ahoy',
            offer: false,
            price: 2,
            stock: 10,
            img: 'img/288585-CHIPS-AHOY-128-GRS.jpg',
        },
        {
            categoty: 'Milk',
            description: 'Deliciosa leche de vaca',
            id: 2,
            name: 'Puleva',
            offer: false,
            price: 1,
            stock: 100,
            img: 'img/puleva_max_relacionado.png',
        },
    ];

    return PRODUCTS;
}
