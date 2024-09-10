import { configureStore } from "@reduxjs/toolkit";
import GameReducer from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    keno: GameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
