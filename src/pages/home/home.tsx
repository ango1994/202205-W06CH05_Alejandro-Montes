import { useSelector } from 'react-redux';
import { CardProduct } from '../../components/card-product/card-product';
import { iState } from '../../models/state';

export function Home() {
    const products = useSelector((state: iState) => state.products);

    return (
        <div>
            <h2>Ofertas</h2>
            <ul>
                {products.map((product) =>
                    product.offer ? (
                        <CardProduct product={product} key={product.id} />
                    ) : (
                        ''
                    )
                )}
            </ul>
        </div>
    );
}
