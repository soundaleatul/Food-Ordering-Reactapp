import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appSotre = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appSotre;
