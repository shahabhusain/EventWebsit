import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    step1: {},
    step2: {},
    selectedPackage: {},
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
    clearItems: (state) => {
      state.form.step1.items = [];
    },
    addSelectedPackage(state, action) {
      if (action.payload.id === "custom") {
        state.selectedPackage = {
          ...action.payload,
          name: "Custom Package",
          price: "Custom Price",
          features: ["Custom Feature 1", "Custom Feature 2"], 
          customText: "Custom package selected!"
        };
      } else {
        state.selectedPackage = action.payload;
      }
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  addForm1data,
  addForm2data,
  clearItems,
  addSelectedPackage,
} = dataSlice.actions;

export default dataSlice.reducer;
