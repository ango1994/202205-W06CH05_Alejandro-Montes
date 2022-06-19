import { configureStore } from '@reduxjs/toolkit';
import { iProduct } from '../models/product';
import { myProductsReducer } from '../reducers/my-products/my-product-reducer';
import { productsReducer } from '../reducers/products/products-reducer';

const preloadedState = {
    cart: [] as Array<iProduct>,
    products: [] as Array<iProduct>,
};

export const store = configureStore({
    reducer: {
        cart: myProductsReducer,
        products: productsReducer,
    },
    preloadedState,
});
