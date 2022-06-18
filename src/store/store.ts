import { configureStore } from '@reduxjs/toolkit';
import { iProduct } from '../models/product';
import { myProductsReducer } from '../reducers/my-products/my-product-reducer';

const preloadedState = {
    cart: [] as Array<iProduct>,
};

export const store = configureStore({
    reducer: {
        cart: myProductsReducer,
    },
    preloadedState,
});
