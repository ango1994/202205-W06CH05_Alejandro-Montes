import { configureStore } from '@reduxjs/toolkit';
import { iProduct } from '../models/product';
import { productsReducer } from '../reducers/products/product-reducer';

const preloadedState = {
    cart: [] as Array<iProduct>,
};

export const store = configureStore({
    reducer: {
        cart: productsReducer,
    },
    preloadedState,
});
