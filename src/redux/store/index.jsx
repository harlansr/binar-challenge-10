import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "../reducers/loginReducer";
const allReducers = combineReducers({
  userLoginReducer: userLoginSlice.reducer,
});

const myStore = configureStore({
  reducer: allReducers,
});

export default myStore;
