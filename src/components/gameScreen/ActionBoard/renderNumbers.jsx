import { Button } from "@headlessui/react";
import { selectNumber, deselectNumber } from "../../../helpers/selectionSlice";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { output } from "../../../helpers/gameSlice";
import { selectedCardId } from "../../../helpers/selectionSlice";

/**
 * 
 * @param {*} number 
 */
const handlePick = (number, cardId) => {
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

/**
 * 
 * @returns 
 */
export const renderNumbers = (selectedNumbers, currentIndex) => {
    const numbers = [];
    const cardId = useAppSelector(selectedCardId);
    const dispatch = useAppDispatch();
    const gameOutput = useAppSelector(output);
    

    for (let i = 1; i <= 80; i++) {
        const isSelected = selectedNumbers.includes(i);
        const isDrawn = gameOutput.includes(i);
        const isCurrentDraw = i === gameOutput[currentIndex];

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
                onClick={() => handlePick(i, cardId)}
                className={`w-20 h-20 m-0 p-0 text-[1.4em] text-[--grey-dark] flex items-center justify-center rounded-none border-[8px]
            border-[--grey-dark] focus:outline-none overflow-hidden whitespace-nowrap
            ${isSelected ? `${theme} font-black text-[1.7em]` : "bg-[--bg-color]"}
            ${isDrawn ? "bg-[--yellow] text-[--red]" : ""} ${isCurrentDraw ? 'border-4 border-red-500' : ''}
            hover:bg-[--red] hover:text-white hover:text-[1.7em]`}
            >
                {i}
            </Button>,
        );
    }
    return numbers;
};