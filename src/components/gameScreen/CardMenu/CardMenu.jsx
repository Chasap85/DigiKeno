import { Button } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

//State dependencies
import { useAppDispatch } from "../../../hooks/hooks";
import { selectCard } from "../../../helpers/selectionSlice";

function CardMenu({ props }) {
  const dispatch = useAppDispatch();
  const { setShowAll } = props;

  const buttons = ["A", "B", "C", "D"];
  const colors = [
    "bg-[--orange] text-white focus:ring-[--orange] outline outline-[4px] outline-[--grey-dark]",
    "bg-[--green] focus:ring-[--green] text-white  outline outline-[4px] outline-[--grey-dark]",
    "bg-[--hit] focus:ring-[--hit] text-white outline outline-[4px] outline-[--grey-dark]",
    "bg-[--blue] focus:ring-[--blue] text-white outline outline-[4px] outline-[--grey-dark]",
  ];

  // todo: when clicked remove the output themes from game state
  const showAllDisplay = () => {
    setShowAll(true);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6 mr-6">
      <div className="mr-2 rounded-full">
        <button
          className="cursor-pointer flex p-2 rounded-full bg-[--bg-color] outline outline-[--grey-dark] outline-[4px] drop-shadow-md"
          onClick={showAllDisplay}
        >
          <AdjustmentsHorizontalIcon className="h-10 w-10 text-[--grey-dark]" />
        </button>
      </div>
      <div className="flex space-x-4">
        {buttons.map((button, index) => (
          <Button
            key={button}
            className={`flex justify-center items-center w-32 h-10 font-extrabold cursor-pointer focus:outline focus:drop-shadow-lg
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
