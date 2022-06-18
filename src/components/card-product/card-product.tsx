import { iProduct } from '../../models/product';

import './card-product.css';

export function CardProduct({ product }: { product: iProduct }) {
    return (
        <div>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    );
}
