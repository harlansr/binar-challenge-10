import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "../reducers/loginReducer";
import loadingSlice from "../reducers/loadingReducer";
import { createWrapper } from "next-redux-wrapper";

const allReducers = combineReducers({
  userLoginReducer: userLoginSlice.reducer,
  loadingReducer: loadingSlice.reducer,
});

const myStore = () =>
  configureStore({
    reducer: allReducers,
  });

export const wrapper = createWrapper(myStore, { debug: true });
export default myStore;
