import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@headlessui/react";
import { actionBoardThemes } from "../../../constants/selectionThemes";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import useGameOutput from "./displayHook";
import {
  selectNumber,
  selectedCard,
  deselectNumber,
  selectedCardId,
  allPicks,
  deselectAllCards,
  currentState,
} from "../../../helpers/selectionSlice";
import { output } from "../../../helpers/gameSlice";
import useGameSelection from "../hooks/selectionHook";

/**
 * @description ActionBoard is the keno number board where all the action happens
 * @param {*} props: {totalPicks, setTotalPicks, showAll, setShowAll} (shared state within Action.jsx)
 *  | @const  totalPicks: the total set of all card picks
 *  | @const setTotalPicks: function to set the total set of all card picks
 *  | @const showAll: boolean to display all card picks
 *  | @const setShowAll: function to set the boolean to display all card picks
 * TODO: Make a board for the smallest screen size. small grid with no numbers just lights
 *
 */

function ActionBoard({ props }) {
  // state dependencies
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(selectedCardId);

  const {
    showAll,
    setShowAll,
  } = props;
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [theme, setTheme] = useState("");
  // // Custom hook to manage game selection
  // useGameSelection({ cardId, setShowAll, showAll, currentCardData, setTheme, setSelectedNumbers, totalPicks });
  // // Custom hook to manage game output
  // useGameOutput({ gameOutput, setCurrentIndex, currentIndex, setHitPlay });

  /**
   *
   * 
   */
  const handlePick = (number) => {
    if (cardId) {
      if (selectedNumbers.includes(number)) {
        dispatch(deselectNumber(number));
        setSelectedNumbers((prev) => prev.filter((n) => n !== number));
        // setTotalPicks((prev) => prev.filter((n) => n !== number));
      } else if (selectedNumbers.length < 10) {
        dispatch(selectNumber(number));
        setSelectedNumbers((prev) => [...prev, number]);
        // if (totalPicks.includes(number)) {
        //   setTotalPicks((prev) => prev.filter((n) => n !== number));
        // }
        // setTotalPicks((prev) => [...prev, number]);
      }
    }
  };

  /**
   *
   * @returns
   */
  const renderNumbers = () => {
    const numbers = [];

    for (let i = 1; i <= 80; i++) {

      if (i == 41) {
        numbers.push(
          <div
            key="divider"
            className="col-span-10 bg-[--bg-color] my-3"
          ></div>,
        );
      }

      numbers.push(
        <Button
          key={i}
          onClick={() => handlePick(i)}
          className={`action-btn`}
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
    </>
  );
}

export default ActionBoard;
