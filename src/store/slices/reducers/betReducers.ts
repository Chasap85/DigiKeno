import { PayloadAction } from "@reduxjs/toolkit";

const betReducers = {
    betOne: (state) => {
        state.cards.forEach((card) => {
          if (card.bet + 1 <= state.maxBet) {
            card.bet = card.bet + 1;
            state.wager += 1;
          }
        });
      },
      betMax: (state) => {
        state.cards.forEach((card) => {
          card.bet = 5;
          state.wager += 5
        });
      },
      throwBet: (state) => {
          state.credits -= state.wager;
      },
}

export default betReducers;