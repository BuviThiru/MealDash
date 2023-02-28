import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice'

let store = configureStore({
    reducer:{
        cart : cartSlice,
    }
});
export default store;