import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { tap: "", nickname: "", roomCode: "" } },
  reducers: {
    setTap: (state, action) => {
      state.value = action.payload;
    },
    setNickname: (state, action) => {
      state.value = action.payload;
    },
    setRoom: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNickname } = userSlice.actions;

export default userSlice.reducer;
