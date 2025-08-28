import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; // Optional, for messages

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);

      // Total cart qty check
      const totalQty = state.reduce((sum, item) => sum + item.qty, 0);
      if (totalQty >= 20) {
        toast.error("Max 20 items Add in cart");
        return state;
      }

      if (existItem) {
        if (existItem.qty >= 5) {
          toast.error("Max 5 quantity allowed for this dish");
          return state;
        }
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    IncrementQty: (state, action) => {
      const totalQty = state.reduce((sum, item) => sum + item.qty, 0);
      if (totalQty >= 20) {
        toast.error("You can only have max 20 items in cart");
        return state;
      }

      return state.map((item) => {
        if (item.id === action.payload) {
          if (item.qty >= 5) {
            toast.error("Max 5 quantity allowed for this dish");
            return item;
          }
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },

    DecrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
  },
});

export const { AddItem, RemoveItem, IncrementQty, DecrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
