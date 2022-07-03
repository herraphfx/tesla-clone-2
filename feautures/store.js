import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../feautures/carSlice'

export const store = configureStore({
    reducer: {
        car: carReducer
    }
})