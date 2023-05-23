import { configureStore } from "@reduxjs/toolkit";
import { searchSlice, toggleSlice } from "./Slices";

export const store = configureStore({
  reducer: {
    banner: toggleSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
