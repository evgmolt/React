import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    nick: "name",
    sex: "m"
  },
  reducers: {
    changeNick: (state, action) => {
      state.nick = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeNick } =
  profileSlice.actions;

export default profileSlice.reducer;