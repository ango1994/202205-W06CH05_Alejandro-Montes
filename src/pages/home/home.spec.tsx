import { useSelector } from 'react-redux';
import { Home } from './home';
import { render, screen } from '../../utils/test-utils';
import { iProduct } from '../../models/product';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockedArray: Array<iProduct> = [
    {
        categoty: 'Cookie',
        description: '',
        id: 0,
        name: 'Pepe',
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

describe('Given the Home component', () => {
    describe('When calling it', () => {
        beforeEach(() => {
            (useSelector as jest.Mock).mockImplementation(() => mockedArray);
        });
        test('It should render the redux store data', () => {
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            );
            const testElement = screen.getByText(/Pepe/i);
            expect(testElement).toBeInTheDocument();
        });
    });
});
