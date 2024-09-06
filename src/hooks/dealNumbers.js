import { resetRevealedNumbers, setDealtNumbers, revealSet } from "../slices/gameSlice";
import { setCardHits, revealNextNumber } from "../slices/selectionSlice";
import { useAppSelector } from "./reduxHooks";

/**
 *  Deal 15 numbers
 *  TODO: make a better random generator doofus
 */
export const dealNumbers = () => (dispatch, getState) => {
    const randomNumbers = [];

    while (randomNumbers.length < 15) {
        const randomNumber = Math.floor(Math.random() * 80) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    dispatch(setDealtNumbers(randomNumbers));
    dispatch(resetRevealedNumbers());
    revealNumbers(dispatch, randomNumbers);
};

function revealNumbers(dispatch, dealtNumbers) {
    let count = 0;
    const intervalId = setInterval(() => {
        dispatch(revealNextNumber(dealtNumbers));
        count++;
        if (count >= dealtNumbers.length) {
            clearInterval(intervalId);
        }
    }, 100);
}

// function tallyCardHits(dealtNumbers, playerCards, dispatch) {
//     // Reset all card hits to 0 before starting
//     playerCards.forEach(card => {
//         dispatch(resetCardHits({ cardId: card.cardId }));
//     });

//     // Create a map to store the cumulative hits for each card, initialized to 0
//     const cardHits = new Map(playerCards.map(card => [card.cardId, 0]));

//     let currentIndex = 0;

//     function processNumber() {
//         if (currentIndex >= dealtNumbers.length) {
//             console.log('All numbers revealed and hits tallied!');
//             return; // Exit the function, stopping further calls
//         }

//         const num = dealtNumbers[currentIndex];
//         dispatch(revealNumber(num));

//         playerCards.forEach(card => {
//             if (card.picks.includes(num)) {
//                 const currentHits = cardHits.get(card.cardId);
//                 const newHits = currentHits + 1;
//                 cardHits.set(card.cardId, newHits);
//                 dispatch(setCardHits({ cardId: card.cardId, hits: newHits }));
//             }
//         });

//         currentIndex++; // Move to the next number

//         // Schedule the next number processing
//         setTimeout(processNumber, 100);
//     }

//     // Start the process
//     processNumber();
// }
