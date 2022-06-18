import { createReducer } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import {
    addMyProduct,
    deleteMyProduct,
    loadMyProduct,
    updateMyProduct,
} from './action-creator';

const initialState: Array<iProduct> = [];
export const myProductsReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadMyProduct, (state, action) => [...action.payload])
        .addCase(addMyProduct, (state, action) => [...state, action.payload])
        .addCase(updateMyProduct, (state, action) =>
            state.map((product) =>
                product.id === action.payload.id ? action.payload : product
            )
        )
        .addCase(deleteMyProduct, (state, action) =>
            state.filter((product) => product.id !== action.payload.id)
        );
});
