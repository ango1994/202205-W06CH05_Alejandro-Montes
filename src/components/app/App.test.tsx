import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store/store';

test('renders learn react link', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
    const test = screen.getByText(/milk and cookies/i);
    expect(test).toBeInTheDocument();
});
