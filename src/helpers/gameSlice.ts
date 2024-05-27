import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
export interface GameState {
    output: number[];
    hits: number;
}

// Define the initial state using that type 
const initialState: GameState = {
    output: [],
    hits: 0,

}

export const gameSlice = createSlice({
    name: 'gameState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        gameOutput: (state, action: PayloadAction<number[]>) => {
            state.output = action.payload;
            console.log('gameOutput', action.payload)
        },
        gameHitCount: (state, action: PayloadAction<number>) => {
            state.hits = action.payload;
        }

    }
})

export const { gameOutput } = gameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const currentState = (state: RootState) => state.gameState;


export default gameSlice.reducer