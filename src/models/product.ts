export interface iProduct {
    id: number;
    name: string;
    price: number;
    stock: number;
    categoty: 'Cookie' | 'Milk';
    offer: boolean;
    description: string;
    img?: string;
}
