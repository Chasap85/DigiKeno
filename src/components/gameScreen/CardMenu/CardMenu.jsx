import { Button } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

//State dependencies
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { deselectAllCards, selectCard, selectedCardId } from "../../../helpers/selectionSlice";

function CardMenu({ props }) {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(selectedCardId);
  const { setShowAll, showAll } = props;

  const buttons = ["A", "B", "C", "D"];
  const colors = [
    "bg-[--orange] text-white focus:ring-[--orange] outline outline-[4px] outline-[--grey-dark]",
    "bg-[--green] focus:ring-[--green] text-white  outline outline-[4px] outline-[--grey-dark]",
    "bg-[--hit] focus:ring-[--hit] text-white outline outline-[4px] outline-[--grey-dark]",
    "bg-[--blue] focus:ring-[--blue] text-white outline outline-[4px] outline-[--grey-dark]",
  ];

  // todo: when clicked remove the output themes from game state
  const showAllDisplay = () => {
    dispatch(deselectAllCards());
    setShowAll(!showAll);
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
            className={`card-btn ${colors[index]}`}
            onClick={() => dispatch(selectCard(button))}
          >
            <span className="">{button}</span>
          </Button>
        ))}
      </div>
      <div>{cardId}</div>
    </div>
  );
}

export default CardMenu;
