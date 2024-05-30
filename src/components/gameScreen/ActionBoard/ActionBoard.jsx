import { useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { actionBoardThemes } from "../../../customstyles/selectionThemes";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import useGameOutput from "./displayHook";
import { selectNumber, selectedCard, deselectNumber, selectedCardId, allPicks, deselectCard } from "../../../helpers/selectionSlice";
import { output } from "../../../helpers/gameSlice";

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
  const playerTotalSelection = useAppSelector(allPicks);
  const cardId = useAppSelector(selectedCardId);
  const currentCardData = useAppSelector(selectedCard);
  const gameOutput = useAppSelector(output);

  const { totalPicks, setTotalPicks, showAll, setShowAll, setHitPlay, hitPlay } = props;
  const [theme, setTheme] = useState("");
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  /**
   * @description: Game Selection State Management which helps display all or individual card picks
   * @var cardId: selected card id used for displaying its picks
   * @var showAll: boolean used to display all card picks
   * 
   * FIX: Need a new approach to showing the selection of numbers on the board when gameplay starts 
   */ 
  useEffect(() => {
    if (showAll === true) {
      console.log("show all");
      setTheme(actionBoardThemes["default"]);
      setSelectedNumbers(totalPicks);
      dispatch(deselectCard());
      // setCurrentIndex(0);
    } else if (hitPlay) {
      console.log("hit play")
      setCurrentIndex(0);
    } else if (cardId) {
      console.log("card ID")
      setTheme(actionBoardThemes[cardId]);
      setSelectedNumbers(currentCardData.picks);
      setShowAll(false);
    } else {
      console.log("woops")
    }

  }, [cardId, showAll, hitPlay]);

  // Custom hook to manage game output
  useGameOutput({ gameOutput, setCurrentIndex, currentIndex, setHitPlay });


  /**
   * 
   * @param {*} number 
   */
  const handlePick = (number) => {
    if (cardId) {
      if (selectedNumbers.includes(number)) { 
        dispatch(deselectNumber(number));
        setSelectedNumbers((prev) => prev.filter((n) => n !== number));
        setTotalPicks((prev) => prev.filter((n) => n !== number));
      } else if (selectedNumbers.length < 10){
        dispatch(selectNumber(number));
        setSelectedNumbers((prev) => [...prev, number]);
        if (totalPicks.includes(number)) {
          setTotalPicks((prev) => prev.filter((n) => n !== number))
        }
        setTotalPicks((prev) => [...prev, number]);
      }
    }
  };

  /**
   * 
   * @returns 
   */
  const renderNumbers = () => {
    const numbers = [];
    const isSelectedSet = new Set(selectedNumbers);
    const isDrawnSet = new Set(gameOutput.slice(0, currentIndex + 1));;
    console.log(currentIndex)

    for (let i = 1; i <= 80; i++) {
      const isSelected = isSelectedSet.has(i);
      const isDrawn = isDrawnSet.has(i);
      const isCurrentDraw = i === gameOutput[currentIndex];
      const isHit = isSelected && isDrawn;

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
          className={`w-20 h-20 m-0 p-0 text-[1.4em] text-[--grey-dark] flex items-center justify-center rounded-none border-[8px]
            border-[--grey-dark] focus:outline-none overflow-hidden whitespace-nowrap
            ${isSelected ? `${theme} font-black text-[1.7em]` : "bg-[--bg-color]"}
            ${isDrawn ? (isHit ? "bg-[--hit]" : "bg-[--red]") : ""} ${isCurrentDraw ? 'border-4 border-red-500 !text-white' : ''}
            ${isHit && isDrawn ? '!bg-[--hit] text-white' : ''}
            hover:bg-[--red] hover:text-white hover:text-[1.7em]`}
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
