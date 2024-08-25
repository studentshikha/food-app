import { configureStore } from "@reduxjs/toolkit"
import cartReducer from  " ./cartSlice";

const appStore = createStore(
    {
        reducer: {
            cart : cartReducer,
        }
    }
)
export default appStore;