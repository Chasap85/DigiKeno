import { PayloadAction } from "@reduxjs/toolkit";
import { calculateWinnings } from "../../../game/paytable";

const gameReducers = {
    clearBoard: (state) => {
        state.revealedNumbers = [];
      },
      setDealtNumbers: (state, action: PayloadAction<number[]>) => {
        state.dealtNumbers = action.payload;
      },
      revealNextNumber: (state, action: PayloadAction<number[]>) => {
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
      displayWinnings: (state) => {
          const total = state.cards.reduce((total, card) => total + card.pay, 0);
      }
}

export default gameReducers;