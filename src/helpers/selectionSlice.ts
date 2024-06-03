import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

export interface CardState {
  cardId: string | null;  // card identifier
  picks: number[];        // selected numbers
  count: number;          // number of selected numbers
  isActive: boolean;      // active card flag
  hits: number[];         // winning numbers
  payout: number;         // pay amount
}

export interface SelectionState {
  cards: CardState[];
  allPicks: number[];  // REVIEW: is this needed?
} 

// Define the initial state using that type
const initialState: SelectionState = {
  cards: [
    { cardId: "A", picks: [], count: 0, isActive: false, hits: [], payout: 0},
    { cardId: "B", picks: [], count: 0, isActive: false, hits: [], payout: 0},
    { cardId: "C", picks: [], count: 0, isActive: false, hits: [], payout: 0},
    { cardId: "D", picks: [], count: 0, isActive: false, hits: [], payout: 0},
  ],
  allPicks: [],
};

export const selectionSlice = createSlice({
  name: "selection",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // set the active card
    selectCard: (state, action: PayloadAction<string>) => {
      state.cards.forEach((card) => {
        card.isActive = card.cardId === action.payload;
      });
    },
    deselectAllCards: (state) => {
      state.cards.forEach((card) => {
        card.isActive = false;
      });
    },
    // remove number from active card
    deselectNumber: (state, action: PayloadAction<number>) => {
      const updatedPicks = [];
      const activeCard = state.cards.find((card) => card.isActive);
      if (activeCard) {
        activeCard.picks.filter((pick) => pick !== action.payload,
        );
        activeCard.picks = updatedPicks;
        activeCard.count = updatedPicks.length;
      }
    },
    // add number to active card
    selectNumber: (state, action: PayloadAction<number>) => {
      const activeCard = state.cards.find((card) => card.isActive);
      const allPicks = state.allPicks;
      if (
        activeCard &&
        activeCard.count < 10 &&
        !activeCard.picks.includes(action.payload)
      ) {
        activeCard.picks.push(action.payload);
        allPicks.push(action.payload);
        activeCard.count = activeCard.picks.length;
      }
      console.log(activeCard?.cardId, activeCard?.count);
    },
  },
});

export const { selectCard, selectNumber, deselectNumber, deselectAllCards } =
  selectionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentState = (state: RootState) => state.card;
export const selectedCardId = (state: RootState) =>
  state.card.cards.find((card) => card.isActive)?.cardId;
export const allPicks = (state: RootState) => state.card.allPicks;
export const selectedCard = (state: RootState) =>
  state.card.cards.find((card) => card.isActive);

export default selectionSlice.reducer;
