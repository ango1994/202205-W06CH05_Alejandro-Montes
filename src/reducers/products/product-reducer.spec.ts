import { AnyAction } from '@reduxjs/toolkit';
import { iProduct } from '../../store/product';
import { addProduct, deleteProduct, loadProduct } from './action-creator';
import { productsReducer } from './product-reducer';

const mockedArray: Array<iProduct> = [
    {
        categoty: 'Cookie',
        description: '',
        id: 0,
        name: '',
        offer: true,
        price: 30,
        stock: 10,
    },
];
describe('Given product reducer', () => {
    describe('When calling it with load action with an array of products', () => {
        test('It should return a new state with that array of characters', () => {
            const newState = productsReducer([], loadProduct(mockedArray));
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action with a product', () => {
        test('It should return a new state with the product added to the array', () => {
            const newState = productsReducer([], addProduct(mockedArray[0]));
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with delete action', () => {
        test('It should return a new state with the product removed from the array', () => {
            const newState = productsReducer(
                mockedArray,
                deleteProduct(mockedArray[0])
            );
            expect(newState).toEqual([]);
        });
    });
});
