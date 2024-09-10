import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { CardHits, CardState } from "../types";
const cardReducers = {
  // set the active card
  selectCard: (state: GameState, action: PayloadAction<string>) => {
    const activeCard = action.payload;
    state.cards.forEach((card) => {
      if (card.cardId === activeCard) {
        card.isActive = true;
      } else {
        card.isActive = false;
      }
    });
  },
  deselectCard: (state: GameState) => {
    state.cards.forEach((card) => {
      card.isActive = false;
    });
  },
  // filter the picks array to remove the deselected number
  deselectNumber: (state: GameState, action: PayloadAction<number>) => {
    const activeCard = state.cards.find((card) => card.isActive);
    const allPicks = state.allPicks.filter((pick) => pick !== action.payload);
    state.allPicks = allPicks;

    if (activeCard) {
      const updatedPicks = activeCard.picks.filter(
        (pick) => pick !== action.payload,
      );
      activeCard.picks = updatedPicks;
      activeCard.count = updatedPicks.length;
    }
  },
  selectNumber: (state: GameState, action: PayloadAction<number>) => {
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
  setShowAll: (state: GameState, action: PayloadAction<boolean>) => {
    state.showAll = action.payload;
  },
  clearCards: (state: GameState, action: PayloadAction<CardState[]>) => {
    state.cards = action.payload.map((card) => ({
      ...card,
      hits: 0,
      pay: 0,
    }));
    state.dealIndex = -1;
    state.revealedNumbers = [];
    state.winnings = 0;
  },
  setCardHits: (state: GameState, action: PayloadAction<CardHits>) => {
    const { cardId, hits } = action.payload;
    const cards = state.cards;
    cards.forEach((card) => {
      if (card.cardId == cardId) {
        card.hits = hits;
      }
    });
  },
  eraseAll: (state: GameState) => {
    state.cards.forEach((card) => {
      card.bet = 0;
      card.picks = [];
    });
    state.allPicks = [];
    state.revealedNumbers = [];
    state.wager = 0;
  },
};

export default cardReducers;
