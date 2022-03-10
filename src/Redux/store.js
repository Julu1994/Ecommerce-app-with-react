import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./Features/Slice";
import cartSlice from "./Features/CartSlice";
import latestSlice from "./Features/latestSlice";


export default configureStore({
    reducer: {
        ui: cartSlice.reducer, post: postSlice.reducer, cart: latestSlice.reducer
        
    },
})