import { useSelector } from 'react-redux';
import { CardProduct } from '../../components/card-product/card-product';
import { iState } from '../../models/state';

export function MilkProducts() {
    const products = useSelector((state: iState) => state.products);

    return (
        <div>
            <h2>Milks</h2>
            {
                <ul>
                    {products.map((product) =>
                        product.categoty === 'Milk' ? (
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
