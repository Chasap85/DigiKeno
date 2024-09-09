import { useEffect, useState } from "react";
import { actionBoardThemes } from "../../../customstyles/selectionThemes";

import { useAppDispatch, useAppSelector } from "../../../game/reduxHooks";
import {
  selectNumber,
  selectedCard,
  deselectNumber,
  selectedCardId,
  deselectCard,
} from "../../../slices/selectionSlice";
import { kenoBoard, revealedNumbers } from "../../../slices/gameSlice";
import Cell from "./Cell";

/**
 * TODO: Make a board for the smallest screen size. small grid with no numbers just lights
 * @returns
 */

function ActionBoard({ props }) {
  // state dependencies
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(selectedCardId);
  const currentCardData = useAppSelector(selectedCard);
  const numberBoard = useAppSelector(kenoBoard);
  const revealedNum = useAppSelector((state) => state.card.revealedNumbers);

  const { totalPicks, showAll, setShowAll } = props;
  const [theme, setTheme] = useState("");
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  useEffect(() => {
    if (showAll === true) {
      setTheme(actionBoardThemes["default"]);
      setSelectedNumbers(totalPicks);
      dispatch(deselectCard());
    }
    if (cardId) {
      setTheme(actionBoardThemes[cardId]);
      setSelectedNumbers(currentCardData.picks);
      setShowAll(false);
    }
  }, [cardId, showAll, currentCardData]);

  const handlePick = (number) => {
    if (cardId) {
      if (selectedNumbers.includes(number)) {
        dispatch(deselectNumber(number));
        setSelectedNumbers((prev) => prev.filter((n) => n !== number));
      } else if (selectedNumbers.length < 10) {
        dispatch(selectNumber(number));
        setSelectedNumbers((prev) => [...prev, number]);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-10 grid-flow-row gap-2 mt-5 mb-8 p-2 rounded outline outline-[--black] outline-4">
        {numberBoard &&
          numberBoard.map((value, index) => {
            const number = index + 1;
            const isDealt = revealedNum.includes(number);
            const isCardSelection = selectedNumbers.includes(number);
            const isHit = isCardSelection && isDealt;

            return (
              <Cell
                key={index}
                number={number}
                theme={
                  isDealt
                    ? isHit
                      ? "bg-[--yellow] text-[--red] outline outline-4 outline-[--red]"
                      : "bg-[--red] text-white" // Hit or miss
                    : isCardSelection
                      ? theme
                      : "default" // Card theme or default for all cards
                }
                onClick={() => handlePick(number)}
              />
            );
          })}
      </div>
    </>
  );
}

export default ActionBoard;
