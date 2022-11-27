import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../../action/fb_database";

export const retrieveLoginUser = createAsyncThunk(
  "loginUser/retrieveLoginUser",
  async (id) => {
    const userLoginData = await getUserById(id);
    return userLoginData;
  }
);

const userLoginSlice = createSlice({
  name: "loginUser",
  initialState: { loginUser: [] },
  reducers: {
    logoutUser(state, action) {
      state.loginUser = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveLoginUser.fulfilled, (state, action) => {
      state.loginUser = action.payload;
    });
  },
});

export const userLoginAction = userLoginSlice.actions;
export default userLoginSlice;
