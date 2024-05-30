import { Button, Tab } from "@headlessui/react";
import { useState } from "react";
import { generateRandomNumbers } from "../../../helpers/ranGenerator";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { gameOutput, output, gameReset } from "../../../helpers/gameSlice";
import GamePlayScreen from "./GamePlayScreen";

function Banner({ props }) {
    const dispatch = useAppDispatch();
    const { setHitPlay, hitPlay } = props;
    const { setShowAll } = props;

    const startDeal = () => {
        console.log("Deal");
        setShowAll(true);
        setHitPlay(true); 
        dispatch(gameOutput(generateRandomNumbers(20)));
    }

    return (
        <div className="flex grid grid-cols-6 gap-4 p-6 outline outline-[8px] outline-[--grey-dark] rounded">
            <div className="col-span-2">
                <div className="gap-3 flex m-6">
                    <button className="flex justify-center items-center mr-4 w-[5rem] h-[5rem] bg-[--bg-color] text-2xl text-[--grey-dark] font-bold active:font-extrabold cursor-pointer
                                active:transform active:scale-95 transition-transform duration-150 ease-out active:bg-[--hit]
                                active:text-white outline outline-[4px] outline-[--grey-dark] drop-shadow-md uppercase"
                    >
                        Max Bet
                    </button>
                    <button className="flex justify-center items-center w-[5rem] h-[5rem] bg-[--bg-color] text-2xl text-[--grey-dark] font-bold active:font-extrabold cursor-pointer
                                active:transform active:scale-95 transition-transform duration-150 ease-out active:bg-[--hit]
                                active:text-white outline outline-[4px] outline-[--grey-dark] drop-shadow-md uppercase"
                    >
                        Bet
                    </button>
                </div>
            </div>
            <div className="flex justify-center p-4 items-center col-span-3 bg-[--grey-dark] rounded-md">
                <GamePlayScreen />
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={startDeal}
                    className="bg-[--red] w-[7rem] h-[7rem] text-white font-bold active:font-extrabold cursor-pointer
                                active:transform active:scale-95 transition-transform duration-150 ease-out active:bg-[--hit]
                                outline outline-[4px] outline-[--grey-dark] drop-shadow-md uppercase"
                >
                    Hit
                </button>
            </div>
        </div>
    );
}

export default Banner;
