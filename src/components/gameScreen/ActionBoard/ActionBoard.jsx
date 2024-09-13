import { useEffect, useState } from "react";
import { actionBoardThemes } from "../../../customstyles/selectionThemes";
import { motion } from "framer-motion";

import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import {
  selectNumber,
  deselectNumber,
  deselectCard,
} from "../../../store/slices/gameSlice";
import { selectedCard, selectedCardId } from "../../../store/slices/selectors";
import { kenoBoard } from "../../../store/slices/selectors";
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
  const revealedNum = useAppSelector((state) => state.keno.revealedNumbers);

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
    <div className="p-8 bg-gradient-to-br from-gray-900 to-indigo-900 rounded-xl shadow-2xl">
    <motion.div 
      className="grid grid-cols-10 gap-3"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {numberBoard && numberBoard.map((value, index) => {
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
                  ? "hit"
                  : "dealt"
                : isCardSelection
                  ? "selected"
                  : "default"
            }
            onClick={() => handlePick(number)}
          />
        );
      })}
    </motion.div>
  </div>
  );
}

export default ActionBoard;
