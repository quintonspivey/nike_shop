import { configureStore } from '@reduxjs/toolkit';
import shoeReducer from './shoeSlice.js';

export const store = configureStore({
    reducer: {
        shoe: shoeReducer
    },
});