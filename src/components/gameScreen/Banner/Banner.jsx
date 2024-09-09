import { dealNumbers } from "../../../game/dealNumbers";
import { useAppDispatch, useAppSelector } from "../../../game/reduxHooks";
import { allPicks, cards, clearCards } from "../../../slices/selectionSlice";

export default function Banner({ props }) {
  let rounds = 1000;
  const { showAll, setShowAll } = props;
  const playerPicks = useAppSelector(allPicks);
  const playerCards = useAppSelector(cards);
  let dispatch = useAppDispatch();

  const handleDeal = () => {
    if (playerPicks.length > 3) {
      setShowAll(!showAll);
      dispatch(clearCards(playerCards));
      dispatch(dealNumbers(playerCards));
    } else {
      alert("Pick more than 3 numbers for at least one Card!");
    }
  };

  return (
    <div className="text-black">
      <button onClick={handleDeal}>play</button>
    </div>
  );
}
