import { createAction } from '@reduxjs/toolkit';
import { iProduct } from '../../models/product';
import { actionTypes } from './action-types';

export const loadProduct = createAction<Array<iProduct>>(
    actionTypes['products@load']
);
