export interface CardState {
  cardId: string | null;
  picks: number[];
  count: number;
  hits: number;
  bet: number;
  pay: number;
  isActive: boolean;
}

export interface CardHits {
  cardId: string;
  hits: number;
}

export interface GameState {
    cards: CardState[];
    allPicks: number[];
    showAll: boolean;
    dealIndex: number;
    revealedNumbers: number[];
    maxBet: number;
    credits: number;
    winnings: number;
    wager: number;
    kenoBoard: number[];
    dealtNumbers: number[];
  }