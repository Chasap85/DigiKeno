import { useState } from "react";
import CardMenu from "../CardMenu/CardMenu";
import ActionBoard from "./ActionBoard";
import Banner from "../Banner/Banner";

function Action() {
    const [totalPicks, setTotalPicks] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const props = { totalPicks, setTotalPicks, showAll, setShowAll };

    return (
        <div className="flex flex-col items-center">
            <CardMenu props={props} />
            <ActionBoard props={props} />
            <Banner props={props} />
        </div>
    );
}
export default Action;