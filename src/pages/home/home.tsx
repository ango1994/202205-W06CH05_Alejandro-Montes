import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    }, []);

    console.log(products);
    return (
        <div>
            <h1>Hola mundo</h1>
            <ul>
                {products.map((product) => (
                    <li>hola</li>
                ))}
            </ul>
        </div>
    );
}
