import { dealNumbers } from "../../../hooks/dealNumbers";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { allPicks, cards, clearCardHits } from "../../../slices/selectionSlice";

export default function Banner({ props }) {
  const { showAll, setShowAll } = props;
  const playerPicks = useAppSelector(allPicks);
  const playerCards = useAppSelector(cards);
  let dispatch = useAppDispatch();

  const handleDeal = () => {
    if (playerPicks.length > 3) {
      setShowAll(!showAll);
      dispatch(clearCardHits(playerCards));
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
