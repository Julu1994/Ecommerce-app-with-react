import { createSlice } from "@reduxjs/toolkit";

const latestSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        // replaceCart(state, action) {
        //     state.totalQuantity = action.payload.totalQuantity;
        //     state.items = action.payload.items;
        // },
        addItemToCart(state, action) {
        
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.price === newItem.price

            );
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    Id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } 
            else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        },
    },
});

export const cartActions = latestSlice.actions;

export default latestSlice;