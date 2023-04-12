import { createSlice } from "@reduxjs/toolkit";
// Tạo riêng redux cho phần poppup
// popup ở đây chỉ để show nên chỉ có action true hoặc false.

const initialPopupState = {
  isShowPopup: false,
};

const popupSlice = createSlice({
  name: "showPopup",
  initialState: initialPopupState,
  reducers: {
    showPopup(state) {
      state.isShowPopup = true;
    },
    hidePopup(state) {
      state.isShowPopup = false;
    },
  },
});

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;
