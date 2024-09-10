import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import cardReducers from "./reducers/cardReducers";
import gameReducers from "./reducers/gameReducers";
import betReducers from "./reducers/betReducers";
import { initialState } from "./constants";

export const selectionSlice = createSlice({
  name: "keno",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    ...cardReducers,
    ...gameReducers,
    ...betReducers,
  },
});

export const {
  selectCard,
  selectNumber,
  deselectNumber,
  deselectCard,
  setShowAll,
  clearCards,
  clearBoard,
  revealNextNumber,
  setCardHits,
  eraseAll,
  betMax,
  betOne,
  throwBet,
  displayWinnings,
} = selectionSlice.actions;

export default selectionSlice.reducer;
