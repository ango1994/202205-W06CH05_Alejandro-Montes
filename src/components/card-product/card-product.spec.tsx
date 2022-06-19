import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { iProduct } from '../../models/product';
import { CardProduct } from './card-product';

describe('Given the component Card', () => {
    describe('When it receives the parameters of a product', () => {
        test('Then it should print the product name', () => {
            const mockedProduct: iProduct = {
                categoty: 'Cookie',
                description: '',
                id: 0,
                name: 'chips',
                offer: true,
                price: 30,
                stock: 10,
            };
            render(
                <BrowserRouter>
                    <CardProduct product={mockedProduct}></CardProduct>
                </BrowserRouter>
            );
            const test = screen.getByText(/chips/i);
            expect(test).toBeInTheDocument();
        });
    });
});
