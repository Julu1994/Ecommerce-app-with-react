import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "ui",
    initialState: {cartIsVisible: false},
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});
export const uiAction = cartSlice.actions;
export default cartSlice;

