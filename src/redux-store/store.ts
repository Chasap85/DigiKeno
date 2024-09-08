import { configureStore } from "@reduxjs/toolkit";
import SelectionReducer from "../slices/selectionSlice";
import GameStateReducer from "../slices/gameSlice";

export const store = configureStore({
  reducer: {
    card: SelectionReducer,
    gameState: GameStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
