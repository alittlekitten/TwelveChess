import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    tap: "SetNickname",
    nickname: "기본",
    roomCode: "",
  },
  reducers: {
    setTap: (state, action) => {
      state.tap = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setRoom: (state, action) => {
      state.roomCode = action.payload;
    },
  },
});

export const { setTap, setNickname, setRoom } = userSlice.actions;

export default userSlice.reducer;
