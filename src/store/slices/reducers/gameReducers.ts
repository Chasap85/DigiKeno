import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../types";
import { calculateWinnings } from "../../../game/paytable";

const gameReducers = {
  clearBoard: (state: GameState) => {
    state.revealedNumbers = [];
    // clear winnings while we're at it
    state.winnings = 0;
  },
  setDealtNumbers: (state: GameState, action: PayloadAction<number[]>) => {
    state.dealtNumbers = action.payload;
  },
  revealNextNumber: (state: GameState, action: PayloadAction<number[]>) => {
    if (state.dealIndex < action.payload.length - 1) {
      state.dealIndex++;
      const currentNumber = action.payload[state.dealIndex];
      state.revealedNumbers.push(currentNumber);
      // update hits while we're at it
      state.cards.forEach((card) => {
        if (card.picks.includes(currentNumber)) {
          card.hits++;
          card.pay = calculateWinnings(card.count, card.hits, card.bet);
        }
      });
    }
  },
  displayWinnings: (state: GameState) => {
    state.winnings = state.cards.reduce((total, card) => total + card.pay, 0);
  },
  updatePlayerCredits: (state: GameState) => {
    state.credits += state.winnings;
  }
};

export default gameReducers;
