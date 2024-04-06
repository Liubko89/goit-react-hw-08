import { createSlice } from "@reduxjs/toolkit";

const changeFilterSlice = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },

  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = changeFilterSlice.actions;

export const changeFilterReducer = changeFilterSlice.reducer;
