import { useAppSelector } from "../../../store/reduxHooks";
import {
  playerCredits,
  wager,
  winnings,
} from "../../../store/slices/selectors";

function Display() {
  const credits = useAppSelector(playerCredits);
  const winAmt = useAppSelector(winnings);
  const wagerAmt = useAppSelector(wager);
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
            <div className="text-3xl font-bold text-green-400">{winAmt}</div>
          </div>
          <div>Wager {wagerAmt}</div>
        </div>
      </div>
    </div>
  );
}

export default Display;
