import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux-store/store";
import { dealNumbers } from "../hooks/dealNumbers";
import { revealSet } from "./gameSlice";

export interface CardState {
  cardId: string | null;
  picks: number[];
  count: number;
  hits: number;
  isActive: boolean;
}

export interface SelectionState {
  cards: CardState[];
  allPicks: number[];
  showAll: boolean;
  dealIndex: number;
  revealedNumbers: number[];
}

interface CardHits {
  cardId: string;
  hits: number;
}

const initialState: SelectionState = {
  cards: [
    { cardId: "A", picks: [], count: 0, hits: 0, isActive: false },
    { cardId: "B", picks: [], count: 0, hits: 0, isActive: false },
    { cardId: "C", picks: [], count: 0, hits: 0, isActive: false },
    { cardId: "D", picks: [], count: 0, hits: 0, isActive: false },
  ],
  allPicks: [],
  showAll: false,
  dealIndex: -1,
  revealedNumbers: [],
};

export const selectionSlice = createSlice({
  name: "selection",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // set the active card
    selectCard: (state, action: PayloadAction<string>) => {
      const activeCard = action.payload;
      state.cards.forEach((card) => {
        if (card.cardId === activeCard) {
          card.isActive = true;
        } else {
          card.isActive = false;
        }
      });
    },
    deselectCard: (state) => {
      state.cards.forEach((card) => {
        card.isActive = false;
      });
    },
    // filter the picks array to remove the deselected number
    deselectNumber: (state, action: PayloadAction<number>) => {
      const activeCard = state.cards.find((card) => card.isActive);
      const allPicks = state.allPicks.filter((pick) => pick !== action.payload);
      state.allPicks = allPicks;

      if (activeCard) {
        const updatedPicks = activeCard.picks.filter(
          (pick) => pick !== action.payload
        );
        activeCard.picks = updatedPicks;
        activeCard.count = updatedPicks.length;
      }
    },
    selectNumber: (state, action: PayloadAction<number>) => {
      const activeCard = state.cards.find((card) => card.isActive);
      const allPicks = state.allPicks;
      if (
        activeCard &&
        activeCard.count < 10 &&
        !activeCard.picks.includes(action.payload)
      ) {
        activeCard.picks.push(action.payload);
        if (!allPicks.includes(action.payload)) {
          allPicks.push(action.payload);
        }
        activeCard.count = activeCard.picks.length;
      }
    },
    setShowAll: (state, action: PayloadAction<boolean>) => {
      state.showAll = action.payload;
    },
    clearCardHits: (state, action: PayloadAction<CardState[]>) => {
      state.cards = action.payload.map(card => ({...card, hits: 0}));
      state.dealIndex = -1;
      state.revealedNumbers = [];
    },
    revealNextNumber: (state, action: PayloadAction<number[]>) => {
        if (state.dealIndex < action.payload.length -1) {
          state.dealIndex++;
          const currentNumber = action.payload[state.dealIndex];
          state.revealedNumbers.push(currentNumber)
          state.cards.forEach(card => {
            if (card.picks.includes(currentNumber)) {
              card.hits++;
            }
          });
        }
      },
    setCardHits: (state, action: PayloadAction<CardHits>) => {
      const { cardId, hits } = action.payload;
      const cards = state.cards;
      cards.forEach((card) => {
        if (card.cardId == cardId) {
          card.hits = hits;
        }
      });
    },
  },
});

export const {
  selectCard,
  selectNumber,
  deselectNumber,
  deselectCard,
  setShowAll,
  clearCardHits,
  revealNextNumber,
  setCardHits,
} = selectionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const cards = (state: RootState) => state.card.cards;
export const selectedCardId = (state: RootState) =>
  state.card.cards.find((card) => card.isActive)?.cardId;
export const allPicks = (state: RootState) => state.card.allPicks;
export const selectedCard = (state: RootState) =>
  state.card.cards.find((card) => card.isActive);
export const isShowAll = (state: RootState) => state.card.showAll;

export default selectionSlice.reducer;