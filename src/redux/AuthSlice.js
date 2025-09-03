import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; // Assuming you still want toast messages

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null, // You can store user data here if needed (e.g., username)
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload; // Store user data if passed
      toast.success("Login successful!");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      toast.info("Logged out successfully!");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;