import { Button } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

//State dependencies
import { useAppDispatch, useAppSelector } from "../../../game/reduxHooks";
import { clearBoard, selectCard } from "../../../slices/selectionSlice";

function CardMenu({ props }) {
  const dispatch = useAppDispatch();
  const { showAll, setShowAll } = props;

  const buttons = ["A", "B", "C", "D"];
  const colors = [
    "bg-[--red] text-white focus:ring-[--red] active:ring-[--red]",
    "bg-[--hit] focus:ring-[--hit] text-white",
    "bg-[--green] focus:ring-[--green] text-white",
    "bg-[--blue] focus:ring-[--blue] text-white",
  ];

  const resetBoard = () => {
    setShowAll(!showAll);
    dispatch(clearBoard());
  };

  // NOTE: Change showAll to a reset function for the board
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="m-1 rounded-full bg-[--grey]">
        <button
          className="cursor-pointer flex p-2 rounded-full bg-white outline outline-[--black] outline-4 drop-shadow-md"
          onClick={resetBoard}
        >
          <AdjustmentsHorizontalIcon className="h-8 w-8 text-[--grey-dark]" />
        </button>
      </div>
      <div className="flex space-x-1">
        {buttons.map((button, index) => (
          <Button
            key={button}
            className={`font-extrabold cursor-pointer focus:drop-shadow-lg
            w-16 h-12 rounded focus:ring focus:ring-offset-2 ${colors[index]}
            transition-all duration-500 ease-in-out focus:ring-2`}
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
