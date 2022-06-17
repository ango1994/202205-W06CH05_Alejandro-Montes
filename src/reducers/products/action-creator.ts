import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../../store/product';
import { actionTypes } from './action-types';

export const addProduct = createAction<iProduct>(actionTypes['product@add']);
export const deleteProduct = createAction<iProduct>(
    actionTypes['product@delete']
);
export const updateProduct = createAction<iProduct>(
    actionTypes['product@update']
);
export const loadProduct = createAction<Array<iProduct>>(
    actionTypes['product@load']
);
