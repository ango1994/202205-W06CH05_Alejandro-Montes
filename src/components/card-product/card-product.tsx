import { Link } from 'react-router-dom';
import { iProduct } from '../../models/product';

import './card-product.css';

export function CardProduct({ product }: { product: iProduct }) {
    return (
        <div>
            <Link to={'../details/' + product.id}>
                <img src={product.img} alt="" />
            </Link>

            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.stock}</p>
        </div>
    );
}
