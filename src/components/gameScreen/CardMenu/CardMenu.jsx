import { Button } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

//State dependencies
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectCard } from "../../../slices/selectionSlice";
import { resetRevealedNumbers } from "../../../slices/gameSlice";

function CardMenu({ props }) {
  const dispatch = useAppDispatch();
  const { showAll, setShowAll } = props;

  const buttons = ["A", "B", "C", "D"];
  const colors = [
    "bg-[--red] text-white focus:ring-[--red] active:ring-[--red]",
    "bg-[--hit] focus:ring-[--hit] text-white",
    "bg-[--green] focus:ring-[--green] text-white",
    "bg-[--blue] focus:ring-[--blue] text-white"
  ];

  const showAllDisplay = () => {
    setShowAll(!showAll);
    dispatch(resetRevealedNumbers());
  }
  
  // NOTE: Change showAll to a reset function for the board
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <div className="m-1 rounded-full bg-[--grey]">
        <button className="cursor-pointer flex p-2 rounded-full bg-white outline outline-[--hit] outline-[3px] drop-shadow-md"
          onClick={showAllDisplay}>
          <AdjustmentsHorizontalIcon className="h-12 w-12 text-[--grey-dark]" />
        </button>
      </div>
      <div className="flex space-x-1">
        {buttons.map((button, index) => (
          <Button
            key={button}
            className={`w-44 font-extrabold cursor-pointer focus:outline focus:drop-shadow-lg
            focus:outline-none focus:ring focus:ring-offset-2 ${colors[index]}
            transition-all duration-500 ease-in-out focus:ring-[6px] focus:z-10`}
            onClick={() => dispatch(selectCard(button))}
          >
            <span className="">{button}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CardMenu;
