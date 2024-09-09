import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux-store/store";
import { CardState } from "./selectionSlice";

// Define a type for the slice state
export interface GameState {
  output: number[];
  hits: number;
  kenoBoard: number[];
  dealtNumbers: number[];
  revealedNumbers: number[];
  dealIndex: number;
}

// Define the initial state using that type
const initialState: GameState = {
  output: [],
  hits: 0,
  kenoBoard: new Array(80).fill(0),
  dealtNumbers: [],
  revealedNumbers: [],
  dealIndex: -1,
};

export const gameSlice = createSlice({
  name: "gameState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    gameOutput: (state, action: PayloadAction<number[]>) => {
      state.output = action.payload;
      console.log("gameOutput", action.payload);
    },
    gameHitCount: (state, action: PayloadAction<number>) => {
      state.hits = action.payload;
    },
    setDealtNumbers: (state, action: PayloadAction<number[]>) => {
      state.dealtNumbers = action.payload;
    },
  },
});

export const { gameOutput, setDealtNumbers } = gameSlice.actions;

export const currentState = (state: RootState) => state.gameState;
export const kenoBoard = (state: RootState) => state.gameState.kenoBoard;
export const dealtNumbers = (state: RootState) => state.gameState.dealtNumbers;
export const revealedNumbers = (state: RootState) =>
  state.gameState.revealedNumbers;

export default gameSlice.reducer;
