import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { changeFilterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: changeFilterReducer,
  },
});
