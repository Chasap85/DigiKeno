import { useState } from "react";

export default function useGameEngine() {
    /**
     * gameboard has 80 cells with each starting with default state of 0
     * each cell can have one and only one state at a time:
     *  0: default
     *  1: player picked number
     *  2: drawn number
     *  3: player picked/drawn number (HIT or WIN)
     */
  const [gameBoard, setGameBoard] = useState(new Array(80).fill(0));
  

  const updateGameBoard = (cell: number, value: number) => {
    setGameBoard((prevState) => {
      const newGameBoard = [...prevState];
      newGameBoard[cell - 1] = value;
      return newGameBoard;
    });
  };

  const resetGameBoard = () => {
    setGameBoard(new Array(80).fill(0));
  };
}
