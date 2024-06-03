import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

export interface GameState {
  output: number[];     // all drawn numbers
  totalHits: number;    // total winning numbers
  jackpot: boolean;     // Jackpot flag
  playSpeed: number;    // speed of play
  winAmt: number;       // amount of win
  winTotal: number;     // total winnings
  winCount: number;     // number of wins
  winStreak: number;    // number of consecutive wins
  losses: number;        // number of losses
  multiplier: number;   // game multiplier
  playMeter: number;    // total games played
  animation: boolean;   // animation flag
}

// Define the initial state using that type
const initialState: GameState = {
  output: [],
  totalHits: 0,
  jackpot: false,
  playSpeed: 50,
  winAmt: 0,
  winTotal: 0,
  winCount: 0,
  winStreak: 0,
  losses: 0,
  multiplier: 1,
  playMeter: 0,
  animation: false,
};

export const gameSlice = createSlice({
  name: "gameState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    gameOutput: (state, action: PayloadAction<number[]>) => {
      state.output = action.payload;
    },
    gameHitCount: (state, action: PayloadAction<number>) => {
      state.totalHits = action.payload;
    },
    gameReset: (state) => {
      state.output = [];
      state.totalHits = 0;
    },
  },
});

export const { gameOutput, gameReset } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentState = (state: RootState) => state.gameState;
export const output = (state: RootState) => state.gameState.output;

export default gameSlice.reducer;
