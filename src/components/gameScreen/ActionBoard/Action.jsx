import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import ActionBoard from "./ActionBoard";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { allPicks } from "../../../slices/selectionSlice";
import Banner from "../Banner/Banner";

function Action() {
    const totalPicks = useAppSelector(allPicks);
    const [showAll, setShowAll] = useState(false);
    // isReady set true/false if player is ready to hit deal
    const [isReady, setIsReady] = useState(false);
    const props = { totalPicks, showAll, setShowAll };

    return (
        <div className="flex flex-col items-center">
            <CardMenu props={props} />
            <ActionBoard props={props} />
            <Banner props={props}/>
        </div>
    );
}
export default Action;