import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/reduxHooks";
import {
  playerCredits,
  wager,
  winnings,
} from "../../../store/slices/selectors";
import { useDispatch } from "react-redux";
import { updatePlayerCredits } from "../../../store/slices/gameSlice";

function Display() {
  const dispatch = useDispatch();
  const credits = useAppSelector(playerCredits);
  const winAmt = useAppSelector(winnings);
  const wagerAmt = useAppSelector(wager);
  const [displayWinnings, setDisplayedWinnings] = useState(0);

  useEffect(() => {
    if (winAmt > 0 ){
      let count = 0;

      const intervalId = setInterval(() => {
        count++;
        setDisplayedWinnings(count);

        if (count === winAmt){
          clearInterval(intervalId);
          dispatch(updatePlayerCredits())
        }
      },100)
    } else {
      setDisplayedWinnings(0);
    }
  }, [winAmt])

  return (
    <div className="w-64 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg m-3">
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Credits
            </h2>
            <div className="text-2xl font-bold">{credits}</div>
          </div>
          <div className="pt-2 border-t border-gray-700">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Winnings
            </h2>
            <div className="text-3xl font-bold text-green-400">{displayWinnings}</div>
          </div>
          <div>Wager {wagerAmt}</div>
        </div>
      </div>
    </div>
  );
}

export default Display;
