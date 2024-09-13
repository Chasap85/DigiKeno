import { createSlice } from "@reduxjs/toolkit";
import cardReducers from "./reducers/cardReducers";
import gameReducers from "./reducers/gameReducers";
import betReducers from "./reducers/betReducers";
import { initialState } from "./constants";

export const selectionSlice = createSlice({
  name: "keno",
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
  setDealtNumbers,
  updatePlayerCredits,
} = selectionSlice.actions;

export default selectionSlice.reducer;
