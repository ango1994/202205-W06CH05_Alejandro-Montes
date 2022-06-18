import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import { actionTypes } from './action-types';

export const addMyProduct = createAction<iProduct>(
    actionTypes['myProduct@add']
);
export const deleteMyProduct = createAction<iProduct>(
    actionTypes['myProduct@delete']
);
export const updateMyProduct = createAction<iProduct>(
    actionTypes['myProduct@update']
);
export const loadMyProduct = createAction<Array<iProduct>>(
    actionTypes['myProduct@load']
);
