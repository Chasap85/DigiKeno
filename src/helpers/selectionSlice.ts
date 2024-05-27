import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export interface CardState {
    cardId: string | null;
    picks: number[];
    count: number;
    isActive: boolean;
}
// Define a type for the slice state
export interface SelectionState {
    cards: CardState[];
    allPicks: number[];
}

// Define the initial state using that type 
const initialState: SelectionState = {
    cards: [
        { cardId: 'A', picks: [], count: 0, isActive: false },
        { cardId: 'B', picks: [], count: 0, isActive: false },
        { cardId: 'C', picks: [], count: 0, isActive: false },
        { cardId: 'D', picks: [], count: 0, isActive: false },
    ],
    allPicks: []
}

export const selectionSlice = createSlice({
    name: 'selection',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // set the active card
        selectCard: (state, action: PayloadAction<string>) => {
            const activeCard = action.payload;
            state.cards.forEach(card => {
                if (card.cardId === activeCard) {
                    card.isActive = true;
                } else {
                    card.isActive = false;
                }
            });
        },
        deselectCard: (state) => {
            state.cards.forEach(card => {
                card.isActive = false;
            });
        },
        // filter the picks array to remove the deselected number
        deselectNumber: (state, action: PayloadAction<number>) => {
            const activeCard = state.cards.find(card => card.isActive);
            const allPicks = state.allPicks.filter(pick => pick !== action.payload);

            if (activeCard) {
                const updatedPicks = activeCard.picks.filter(pick => pick !== action.payload);
                activeCard.picks = updatedPicks;
                activeCard.count = updatedPicks.length;
            }
        },
        selectNumber: (state, action: PayloadAction<number>) => {
            const activeCard = state.cards.find(card => card.isActive);
            const allPicks = state.allPicks;
            if (activeCard && activeCard.count < 10 && !activeCard.picks.includes(action.payload)) {
                activeCard.picks.push(action.payload);
                allPicks.push(action.payload);
                activeCard.count = activeCard.picks.length;
            }
        },
    }
})

export const { selectCard, selectNumber, deselectNumber, deselectCard } = selectionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const currentState = (state: RootState) => state.card.cards;
export const selectedCardId = (state: RootState) => state.card.cards.find(card => card.isActive)?.cardId;
export const allPicks = (state: RootState) => state.card.allPicks;
export const selectedCard = (state: RootState) => state.card.cards.find(card => card.isActive);

export default selectionSlice.reducer