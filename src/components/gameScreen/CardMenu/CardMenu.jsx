import { Button } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "../../../store/reduxHooks";
import { clearBoard, selectCard } from "../../../store/slices/gameSlice";
import { selectedCardId } from "../../../store/slices/selectors";

/**
 * Card Menu is a selection menu to populate card numbers
 * @param {*} showAll - holds true or false value for display single card numbers or all card numbers
 * @param {*} setShowAll - setter for show all state
 */
function CardMenu({ props }) {
  const dispatch = useAppDispatch();
  const { showAll, setShowAll } = props;
  const [selectedButton, setSelectedButton] = useState(null);
  
  // Assuming you have a selector for the currently active card in your Redux store
  const activeCard = useAppSelector(selectedCardId);

  useEffect(() => {
    setSelectedButton(activeCard);
  }, [activeCard]);

  const buttons = ["A", "B", "C", "D"];
  const colors = [
    "bg-red-500 hover:bg-red-600",
    "bg-yellow-500 hover:bg-yellow-600",
    "bg-green-500 hover:bg-green-600",
    "bg-blue-500 hover:bg-blue-600",
  ];

  const resetBoard = () => {
    setShowAll(!showAll);
    dispatch(clearBoard());
    setSelectedButton(null);
  };

  const handleButtonClick = (button) => {
    dispatch(selectCard(button));
    setSelectedButton(button);
  };

  return (
    <motion.div 
      className="flex justify-center items-center gap-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          className="p-2 rounded-full bg-white text-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
          onClick={resetBoard}
        >
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </Button>
      </motion.div>
      <div className="flex space-x-2">
        {buttons.map((button, index) => (
          <motion.div
            key={button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={`font-extrabold text-white w-12 h-12 rounded-lg shadow-md hover:shadow-lg 
                ${colors[index]} 
                transition-all duration-300
                ${selectedButton === button ? 'ring-4 ring-white' : ''}
              `}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CardMenu;
