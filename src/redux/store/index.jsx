import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "../reducers/loginReducer";
import loadingSlice from "../reducers/loadingReducer";

const allReducers = combineReducers({
  userLoginReducer: userLoginSlice.reducer,
  loadingReducer: loadingSlice.reducer
});

const myStore = configureStore({
  reducer: allReducers,
});

export default myStore;
