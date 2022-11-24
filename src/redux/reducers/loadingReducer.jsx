import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { loadingStatus: false },
  reducers: {
    toggleLoadingStatus(state, action){
      state.loadingStatus = !state.loadingStatus
    }
  }
})

export const loadingAction = loadingSlice.actions
export default loadingSlice