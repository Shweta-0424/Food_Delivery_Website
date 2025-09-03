import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import authSlice from "./AuthSlice"; // Import the new auth slice

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice, // Add the auth reducer here
  },
});