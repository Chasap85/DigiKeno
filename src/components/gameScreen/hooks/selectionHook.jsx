import { useEffect, useMemo } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { actionBoardThemes } from "../../../constants/selectionThemes";
import { deselectAllCards } from "../../../helpers/selectionSlice";
/**
   * @description: Game Selection State Management which helps display all or individual card picks
   * @var cardId: selected card id used for displaying its picks
   * @var showAll: boolean used to display all card picks
   *
   * FIX: Need a new approach to showing the selection of numbers on the board when gameplay starts
   */
function useGameSelection({ cardId, showAll, setShowAll, currentCardData, setTheme, setSelectedNumbers, totalPicks }) {
    const dispatch = useAppDispatch();
    const selection = useMemo(() => {
        if (cardId) {
            setShowAll(false);
            setTheme(actionBoardThemes[cardId]);
            setSelectedNumbers(currentCardData.picks);
        }
        if(showAll){
            dispatch(deselectAllCards())
            setTheme(actionBoardThemes['default']);
            setSelectedNumbers(totalPicks)
        }
    }, [cardId, showAll]);
}

export default useGameSelection;