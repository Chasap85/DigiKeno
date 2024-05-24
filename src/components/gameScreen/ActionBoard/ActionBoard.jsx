import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import Banner from "../Banner/Banner";
import { Button } from "@headlessui/react";

/**
 * TODO: Make a board for the smallest screen size. small grid with no numbers just lights
 * @returns
 */

function ActionBoard() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const renderNumbers = () => {
    const handleNumberClick = (number) => {
      console.log(number);
      setSelectedNumbers((prevSelected) => {
        if (prevSelected.includes(number)) {
          // If the number is already selected, remove it
          return prevSelected.filter((n) => n !== number);
        } else {
          // If the number is not selected, add it
          return [...prevSelected, number];
        }
      });
    };

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
          onClick={() => handleNumberClick(i)}
          className={`w-20 h-20 m-0 p-0 text-[1.4em] text-[--grey-dark] flex items-center justify-center rounded-none border-[8px]
            border-[--grey-dark] focus:outline-none overflow-hidden whitespace-nowrap
            ${selectedNumbers.includes(i)
              ? " font-black bg-[--hit] text-white text-[1.7em]"
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
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-[--bg-color]">
        <CardMenu />
        <div className="grid grid-cols-10 grid-flow-row gap-0 mt-5 mb-8 p-0 rounded">
          {renderNumbers()}
        </div>
        <Banner />
      </div>
      <div className="w-[10px] h-[98%] ml-16 mt-6 bg-[--grey-dark] rounded" />
    </div>
  );
}

export default ActionBoard;
