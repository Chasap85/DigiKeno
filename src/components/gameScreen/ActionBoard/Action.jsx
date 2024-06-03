import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import ActionBoard from "./ActionBoard";
import Banner from "../Banner/Banner";
import { useAppSelector } from "../../../store/hooks";

function Action() {
  const [totalPicks, setTotalPicks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [hitPlay, setHitPlay] = useState(false);
  // const cardState = useAppSelector()
  const props = {
    totalPicks,
    setTotalPicks,
    showAll,
    setShowAll,
    hitPlay,
    setHitPlay,
  };

  return (
    <div className="flex flex-col items-center">
      <CardMenu props={props} />
      <ActionBoard props={props} />
      <Banner props={props} />
    </div>
  );
}
export default Action;
