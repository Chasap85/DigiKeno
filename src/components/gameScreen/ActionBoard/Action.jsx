import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import ActionBoard from "./ActionBoard";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import {
  allPicks,
  betMax,
  betOne,
  cards,
  clearCards,
  eraseAll,
  playerCredits,
  throwBet,
  wager,
} from "../../../store/slices/gameSlice";
import Banner from "../Banner/Banner";
import { dealNumbers } from "../../../game/dealNumbers";

function Action() {
  const dispatch = useAppDispatch();
  const totalPicks = useAppSelector(allPicks);
  const credits = useAppSelector(playerCredits)
  const playerCards = useAppSelector(cards);
  const wagerAmt = useAppSelector(wager)
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
      dispatch(throwBet())
      dispatch(clearCards(playerCards));
      dispatch(dealNumbers(playerCards));
    } else {
      alert("Pick more than 3 numbers for at least one Card!");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <CardMenu props={props} />
      <ActionBoard props={props} />
      <Banner
        onEraseAll={handleEraseAll}
        onBet1={handleBet1}
        onBetMax={handleBetMax}
        onPlay={handlePlay}
      />
    </div>
  );
}
export default Action;
