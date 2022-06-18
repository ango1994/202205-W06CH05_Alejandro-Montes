import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import {
    addProduct,
    deleteProduct,
    loadProduct,
    updateProduct,
} from './action-creator';

const initialState: Array<iProduct> = [];
export const productsReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadProduct, (state, action) => [...action.payload])
        .addCase(addProduct, (state, action) => [...state, action.payload])
        .addCase(updateProduct, (state, action) =>
            state.map((product) =>
                product.id === action.payload.id ? action.payload : product
            )
        )
        .addCase(deleteProduct, (state, action) =>
            state.filter((product) => product.id !== action.payload.id)
        );
});
