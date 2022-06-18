import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import { loadProduct } from './action-creator';

const initialState: Array<iProduct> = [];

export const productsReducer = createReducer(initialState, (builder) => {
    return builder.addCase(loadProduct, (state, action) => {
        [...action.payload];
    });
});
