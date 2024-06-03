import { generateRandomNumbers } from "../../../helpers/ranGenerator";

import { useAppDispatch } from "../../../store/hooks";
import { gameOutput } from "../../../helpers/gameSlice";
import GamePlayScreen from "./GamePlayScreen";

function Banner({ props }) {
  const dispatch = useAppDispatch();
  const { setHitPlay } = props;
  const { setShowAll } = props;

  const startDeal = () => {
    console.log("Deal");
    setShowAll(true);
    setHitPlay(true);
    dispatch(gameOutput(generateRandomNumbers(20)));
  };

  return (
    <div className="grid grid-cols-6 gap-4 p-6 outline outline-[8px] outline-[--grey-dark] rounded">
      <div className="col-span-2">
        <div className="gap-3 flex m-6">
          <button className="bet-btn">
            Max Bet
          </button>
          <button className="bet-btn">
            Bet
          </button>
        </div>
      </div>
      <div className="flex justify-center p-4 items-center col-span-3 bg-[--grey-dark] rounded-md">
        <GamePlayScreen />
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={startDeal}
          className="hit-btn"
        >
          Hit
        </button>
      </div>
    </div>
  );
}

export default Banner;
