import { useSelector } from 'react-redux';
import { CardProduct } from '../../components/card-product/card-product';
import { iState } from '../../models/state';

export function CookieProducts() {
    const products = useSelector((state: iState) => state.products);
    // const milkProducts = products.filter((product) => (
    //      product.categoty === 'Milk'
    // ))
    return (
        <div>
            <h2>Cookies</h2>
            {
                <ul>
                    {products.map((product) =>
                        product.categoty === 'Cookie' ? (
                            <CardProduct product={product} key={product.id} />
                        ) : (
                            ''
                        )
                    )}
                </ul>
            }
        </div>
    );
}
