import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import ActionBoard from "./ActionBoard";
import { useAppDispatch, useAppSelector } from "../../../game/reduxHooks";
import {
  allPicks,
  betMax,
  betOne,
  cards,
  clearCards,
  eraseAll,
} from "../../../slices/selectionSlice";
import Banner from "../Banner/Banner";
import { dealNumbers } from "../../../game/dealNumbers";

function Action() {
  const dispatch = useAppDispatch();
  const totalPicks = useAppSelector(allPicks);
  const playerCards = useAppSelector(cards);
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
    if (totalPicks.length > 3) {
      setShowAll(!showAll);
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
        props={props}
        onEraseAll={handleEraseAll}
        onBet1={handleBet1}
        onBetMax={handleBetMax}
        onPlay={handlePlay}
      />
    </div>
  );
}
export default Action;
