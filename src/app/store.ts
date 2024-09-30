// store.ts
"use client";

import { configureStore } from "@reduxjs/toolkit";
import recentSearchReducer from "./slices/recentSearchSlice";

export const store = configureStore({
  reducer: {
    recentSearch: recentSearchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
