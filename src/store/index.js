import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./popup";
import userReducer from "./user";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
