import { setDealtNumbers } from "../slices/gameSlice";
import { cards, displayWinnings, revealNextNumber } from "../slices/selectionSlice";

/**
 *  Deal 15 numbers
 *  TODO: make a better random generator doofus
 */
export const dealNumbers = () => (dispatch, getState) => {
  const randomNumbers = [];
  const playerCards = getState(cards);
  while (randomNumbers.length < 15) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  dispatch(setDealtNumbers(randomNumbers));
  revealNumbers(dispatch, randomNumbers, playerCards);
};

function revealNumbers(dispatch, dealtNumbers, playerCards) {
  let count = 0;
  const intervalId = setInterval(() => {
    dispatch(revealNextNumber(dealtNumbers));
    count++;
    if (count >= dealtNumbers.length) {
      clearInterval(intervalId);
      dispatch(displayWinnings());
    }
  }, 100); // TODO: this needs to be variable speed ( slow -> fast -> fastest )
}
