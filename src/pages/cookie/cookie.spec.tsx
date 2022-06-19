import { useSelector } from 'react-redux';
import { render, screen } from '../../utils/test-utils';
import { iProduct } from '../../models/product';
import { CookieProducts } from './cookie';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockedArray: Array<iProduct> = [
    {
        categoty: 'Cookie',
        description: '',
        id: 0,
        name: 'Chips',
        offer: true,
        price: 30,
        stock: 10,
    },
    {
        categoty: 'Milk',
        description: '',
        id: 1,
        name: 'puleva',
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
            render(<CookieProducts />);
            const testElement1 = screen.getByText(/chips/i);
            const testElement2 = screen.queryByText('puleva');
            expect(testElement1).toBeInTheDocument();
            expect(testElement2).not.toBeInTheDocument();
        });
    });
});
