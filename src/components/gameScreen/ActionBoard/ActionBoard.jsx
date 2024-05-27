import { useEffect, useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import Banner from "../Banner/Banner";
import { Button } from "@headlessui/react";
import { actionBoardThemes } from "../../../customstyles/selectionThemes";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectNumber, selectedCard, deselectNumber, selectedCardId, allPicks, deselectCard } from "../../../helpers/selectionSlice";

/**
 * TODO: Make a board for the smallest screen size. small grid with no numbers just lights
 * @returns
 */

function ActionBoard({ props }) {
  // state dependencies
  const dispatch = useAppDispatch();
  const playerTotalSelection = useAppSelector(allPicks);
  const cardId = useAppSelector(selectedCardId);
  const currentCardData = useAppSelector(selectedCard);
  // props
  const { totalPicks, setTotalPicks, showAll, setShowAll } = props;
  const [theme, setTheme] = useState("");
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  useEffect(() => {
    if(showAll) {
      setTheme(actionBoardThemes["default"]);
      setSelectedNumbers(totalPicks);
      dispatch(deselectCard());
    }
    if (cardId) {
      setTheme(actionBoardThemes[cardId]);
      setSelectedNumbers(currentCardData.picks);
      setShowAll(false);
    }
  }, [cardId, showAll]);

  const handlePick = (number) => {
    if (cardId) {
      if (selectedNumbers.includes(number)) {
        dispatch(deselectNumber(number));
        setSelectedNumbers((prev) => prev.filter((n) => n !== number));
        setTotalPicks((prev) => prev.filter((n) => n !== number));
      } else {
        dispatch(selectNumber(number));
        setSelectedNumbers((prev) => [...prev, number]);
        setTotalPicks((prev) => [...prev, number]);
      }
    }
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 80; i++) {
      if (i == 41) {
        numbers.push(
          <div
            key="divider"
            className="col-span-10 row-span-1 bg-[--bg-color] my-3"
          ></div>,
        );
      }
      numbers.push(
        <Button
          key={i}
          onClick={() => handlePick(i)}
          className={`w-20 h-20 m-0 p-0 text-[1.4em] text-[--grey-dark] flex items-center justify-center rounded-none border-[8px]
            border-[--grey-dark] focus:outline-none overflow-hidden whitespace-nowrap
            ${selectedNumbers.includes(i)
              ? `${theme} font-black text-[1.7em]`
              : "bg-[--bg-color]"
            } hover:bg-[--red] hover:text-white hover:text-[1.7em]`}
        >
          {i}
        </Button>,
      );
    }
    return numbers;
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-10 grid-flow-row gap-0 mt-5 mb-8 p-0 rounded">
          {renderNumbers()}
        </div>
      </div>
      <div className="w-[10px] h-[98%] ml-16 mt-6 bg-[--grey-dark] rounded" />
    </>
  );
}

export default ActionBoard;
