// arbitrary pay table for now
const payTable = {
  1: [0, 2],
  2: [0, 0, 5],
  3: [0, 0, 2, 20],
  4: [0, 0, 1, 4, 50],
  5: [0, 0, 1, 2, 15, 100],
  6: [0, 0, 1, 2, 4, 50, 500],
  7: [0, 0, 1, 1, 3, 20, 100, 1000],
  8: [0, 0, 0, 1, 2, 10, 50, 500, 2000],
  9: [0, 0, 0, 1, 1, 5, 20, 100, 1000, 5000],
  10: [0, 0, 0, 0, 1, 2, 10, 50, 500, 2000, 10000],
};

export function calculateWinnings(picks, hits, bet) {
  if (picks < 1 || picks > 10 || hits > picks) {
    return 0; // Invalid input
  }

  if (picks === hits) {
    alert("Jackpot");
  }
  const multiplier = payTable[picks][hits];
  return multiplier * bet;
}

// returns the updated card pay values
export function updateCardPayouts(cards) {
  return cards.map((card) => {
    const winnings = calculateWinnings(card.picks.length, card.hits, card.bet);
    return {
      ...card,
      pay: winnings,
    };
  });
}
