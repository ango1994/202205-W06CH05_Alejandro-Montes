import { iProduct } from '../../models/product';
import { loadProduct } from './action-creator';
import { productsReducer } from './products-reducer';

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
    {
        categoty: 'Milk',
        description: '',
        id: 1,
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
});
