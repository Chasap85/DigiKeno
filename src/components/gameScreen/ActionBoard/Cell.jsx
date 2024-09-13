import { motion } from "framer-motion";

export default function Cell({ number, theme, onClick }) {
  const baseClasses = "w-full aspect-square rounded-lg flex items-center justify-center text-xl font-bold cursor-pointer transition-all duration-300 transform hover:scale-105";
  
  const themeClasses = {
    hit: "bg-yellow-400 text-red-600 ring-4 ring-red-600 animate-pulse",
    dealt: "bg-red-600 text-white",
    selected: "bg-blue-500 text-white",
    default: "bg-gray-700 text-gray-300 hover:bg-gray-600"
  };

  return (
    <motion.div
      className={`${baseClasses} ${themeClasses[theme]}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {number}
    </motion.div>
  );
}
