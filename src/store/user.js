import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  currentUser: null,
  userArr: localStorage.getItem("userArr")
    ? JSON.parse(localStorage.getItem("userArr"))
    : [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    onLogin(state, action) {
      state.userArr = action.payload;

      //Cap nhat lai du lieu
      localStorage.setItem("currentUser", JSON.stringify(state.userArr));
    },

    onLogout(state) {
      state.currentUser = null;

      //Xoá dữ liệu người dùng ở localStorage khi logout
      localStorage.removeItem("userArr");
      localStorage.removeItem("currentUser");

      window.location.reload();
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
