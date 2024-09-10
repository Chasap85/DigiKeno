import { GameState } from "./types";

export const initialState: GameState = {
  cards: [
    {
      cardId: "A",
      picks: [],
      count: 0,
      hits: 0,
      bet: 0,
      isActive: false,
      pay: 0,
    },
    {
      cardId: "B",
      picks: [],
      count: 0,
      hits: 0,
      bet: 0,
      isActive: false,
      pay: 0,
    },
    {
      cardId: "C",
      picks: [],
      count: 0,
      hits: 0,
      bet: 0,
      isActive: false,
      pay: 0,
    },
    {
      cardId: "D",
      picks: [],
      count: 0,
      hits: 0,
      bet: 0,
      isActive: false,
      pay: 0,
    },
  ],
  allPicks: [],
  showAll: false,
  dealIndex: -1,
  revealedNumbers: [],
  maxBet: 5,
  credits: 1000,
  winnings: 0,
  wager: 0,
  kenoBoard: Array.from({ length: 80 }, (_, i) => i + 1),
  dealtNumbers: [],
};