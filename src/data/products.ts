import { iProduct } from '../models/product';

export async function getProducts() {
    const PRODUCTS: Array<iProduct> = [
        {
            categoty: 'Cookie',
            description: 'Una deliciosa galleta de chocolate',
            id: 1,
            name: 'Chips Ahoy',
            offer: true,
            price: 2,
            stock: 10,
            img: 'img/288585-CHIPS-AHOY-128-GRS.jpg',
        },
        {
            categoty: 'Milk',
            description: 'Deliciosa leche de vaca con sabor MAXimo',
            id: 2,
            name: 'Puleva Max',
            offer: true,
            price: 1,
            stock: 100,
            img: 'img/puleva_max_relacionado.png',
        },
        {
            categoty: 'Milk',
            description: 'Deliciosa leche de almendras',
            id: 3,
            name: 'Alpro',
            offer: false,
            price: 3,
            stock: 190,
            img: 'img/almendras.jpg',
        },
        {
            categoty: 'Cookie',
            description: 'Deliciosas galletas con forma de dinosaurios',
            id: 4,
            name: 'Dinosaurus',
            offer: false,
            price: 2,
            stock: 30,
            img: 'img/dinousaurus.jpg',
        },
    ];

    return PRODUCTS;
}
