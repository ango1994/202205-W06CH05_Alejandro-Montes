import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Home } from './home';

test('renders learn react link', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Hola/i)).toBeInTheDocument();
});
