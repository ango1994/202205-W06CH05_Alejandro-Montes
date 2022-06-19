import { useSelector } from 'react-redux';
import { Details } from './details';
import { render, screen } from '../../utils/test-utils';
import { iProduct } from '../../models/product';
import { iState } from '../../models/state';
import { BrowserRouter, useParams } from 'react-router-dom';
import { store } from '../../store/store';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

const mockedArray: Array<iProduct> = [
    {
        categoty: 'Cookie',
        description: 'deliciosa',
        id: 1,
        name: 'Pepe',
        offer: true,
        price: 30,
        stock: 10,
    },
    {
        categoty: 'Milk',
        description: '',
        id: 2,
        name: '',
        offer: true,
        price: 30,
        stock: 10,
    },
];

describe('Given the Details component', () => {
    describe('When calling it with an id', () => {
        beforeEach(() => {
            (useSelector as jest.Mock).mockImplementation(() => mockedArray);
            (useParams as jest.Mock).mockImplementation(() => ({
                id: '1',
            }));
        });

        test('It should render the info of the product', () => {
            const preloadedState: iState = {
                products: [] as Array<iProduct>,
                cart: [] as Array<iProduct>,
            };
            render(
                <BrowserRouter>
                    <Details />
                </BrowserRouter>,
                { preloadedState, store }
            );
            const testElement = screen.getByText(/deliciosa/i);
            expect(testElement).toBeInTheDocument();
        });
    });
    describe('When calling it with a non existing id', () => {
        beforeEach(() => {
            (useSelector as jest.Mock).mockImplementation(() => mockedArray);
            (useParams as jest.Mock).mockImplementation(() => ({
                id: '40',
            }));
        });

        test('It should render not found', () => {
            const preloadedState: iState = {
                products: [] as Array<iProduct>,
                cart: [] as Array<iProduct>,
            };
            render(
                <BrowserRouter>
                    <Details />
                </BrowserRouter>,
                { preloadedState, store }
            );
            const testElement = screen.getByText(/not found/i);
            expect(testElement).toBeInTheDocument();
        });
    });
});
