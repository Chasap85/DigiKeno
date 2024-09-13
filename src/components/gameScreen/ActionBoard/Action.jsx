import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import ActionBoard from "./ActionBoard";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import {
  betMax,
  betOne,
  clearCards,
  eraseAll,
  throwBet,
} from "../../../store/slices/gameSlice";
import {
  allPicks,
  cards,
  playerCredits,
  wager,
} from "../../../store/slices/selectors";
import Banner from "../Banner/Banner";
import { dealNumbers } from "../../../game/dealNumbers";

function Action() {
  const dispatch = useAppDispatch();
  const totalPicks = useAppSelector(allPicks);
  const credits = useAppSelector(playerCredits);
  const playerCards = useAppSelector(cards);
  const wagerAmt = useAppSelector(wager);
  const [showAll, setShowAll] = useState(false);
  const props = { totalPicks, showAll, setShowAll };

  const handleEraseAll = () => {
    setShowAll(!showAll);
    dispatch(eraseAll());
  };
  const handleBet1 = () => {
    dispatch(betOne());
  };
  const handleBetMax = () => {
    dispatch(betMax());
  };
  const handlePlay = () => {
    if (totalPicks.length > 3 && credits > wagerAmt) {
      setShowAll(!showAll);
      dispatch(throwBet());
      dispatch(clearCards(playerCards));
      dispatch(dealNumbers(playerCards));
    } else {
      alert("Pick more than 3 numbers for at least one Card!");
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
      <CardMenu props={props} />
      <div className="border-t border-gray-700 my-2"></div>
      <ActionBoard props={props} />
      <div className="border-t border-gray-700 my-2"></div>
      <div className="flex justify-between items-center">
        <button 
          onClick={handleEraseAll}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Erase All
        </button>
        <div className="space-x-2">
          <button 
            onClick={handleBet1}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Bet 1
          </button>
          <button 
            onClick={handleBetMax}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Bet Max
          </button>
        </div>
        <button 
          onClick={handlePlay}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Play
        </button>
      </div>
    </div>
  );
}
export default Action;
