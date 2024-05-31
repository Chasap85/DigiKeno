import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state
export interface GameState {
  output: number[];
  hits: number;
}

// Define the initial state using that type
const initialState: GameState = {
  output: [],
  hits: 0,
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
      state.hits = action.payload;
    },
    gameReset: (state) => {
      state.output = [];
      state.hits = 0;
    },
  },
});

export const { gameOutput, gameReset } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentState = (state: RootState) => state.gameState;
export const output = (state: RootState) => state.gameState.output;

export default gameSlice.reducer;
