import { useAppSelector } from "../../../store/reduxHooks";
import { cards } from "../../../store/slices/selectors";
import { motion } from "framer-motion";

function CardInfo() {
  const cardData = useAppSelector(cards);
  const colors = ["bg-[--red]", "bg-[--hit]", "bg-[--green]", "bg-[--blue]"];

  return (
    <div className="p-4  min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={card.cardId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="bg-gray-800 text-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div variant="secondary" className="text-lg font-bold">
                    Card {card.cardId}
                  </div>
                  <span className="text-xs text-gray-400">#{index + 1}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <DataItem label="Play" value={card.count} color="text-blue-400" />
                  <DataItem label="Bet" value={card.bet} color="text-green-400" />
                  <DataItem label="Hit" value={card.hits} color="text-yellow-400" />
                  <DataItem label="Pay" value={card.pay} color="text-pink-400" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const DataItem = ({ label, value, color }) => (
  <div className="text-center">
    <p className="text-xs text-gray-400 uppercase">{label}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

export default CardInfo;
