import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    step1: {},
    step2: {},
  },

  reducers: {
    fetchDataSuccess(state, action) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    addForm1data: (state, action) => {
      state.step1 = action.payload;
    },
    addForm2data: (state, action) => {
      state.step2 = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  addForm1data,
  addForm2data,
} = dataSlice.actions;

export default dataSlice.reducer;
