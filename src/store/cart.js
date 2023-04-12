import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  listCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      const newProduct = action.payload;
      const index = state.listCart.findIndex(
        (item) => item.id === newProduct.id
      );

      if (index !== -1) {
        state.listCart[index].quantity += newProduct.quantity;
      } else {
        state.listCart.push(newProduct);
      }

      localStorage.setItem("cart", JSON.stringify(state.listCart));
    },

    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const index = state.listCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.listCart[index].quantity = quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.listCart));
    },

    deleteCart(state, action) {
      const id = action.payload;
      const index = state.listCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.listCart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(state.listCart));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
