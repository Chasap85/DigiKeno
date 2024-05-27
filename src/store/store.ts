import { configureStore } from "@reduxjs/toolkit"
import SelectionReducer from "../helpers/selectionSlice";
import GameStateReducer from "../helpers/gameSlice";

export const store = configureStore({
  reducer: {
    card: SelectionReducer,
    gameState: GameStateReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch