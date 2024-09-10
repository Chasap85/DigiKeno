import { RootState } from "../store";

export const cards = (state: RootState) => state.keno.cards;
export const selectedCardId = (state: RootState) =>
  state.keno.cards.find((card) => card.isActive)?.cardId;
export const allPicks = (state: RootState) => state.keno.allPicks;
export const selectedCard = (state: RootState) =>
  state.keno.cards.find((card) => card.isActive);
export const isShowAll = (state: RootState) => state.keno.showAll;
export const playerCredits = (state: RootState) => state.keno.credits;
export const winnings = (state: RootState) => state.keno.winnings;
export const wager = (state: RootState) => state.keno.wager;
export const kenoBoard = (state: RootState) => state.keno.kenoBoard;
export const dealtNumbers = (state: RootState) => state.keno.dealtNumbers;
export const revealedNumbers = (state: RootState) =>
  state.keno.revealedNumbers;