import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardProduct } from '../../components/card-product/card-product';
import { getProducts } from '../../data/products';
import { iState } from '../../models/state';
import { loadProduct } from '../../reducers/products/action-creator';

export function Home() {
    const products = useSelector((state: iState) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts().then((products) => {
            dispatch(loadProduct(products));
            console.log(products);
        });
    }, [dispatch]);

    console.log(products);
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ul>
        </div>
    );
}
