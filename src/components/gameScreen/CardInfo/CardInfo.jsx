import { useAppSelector } from "../../../game/reduxHooks";
import { cards } from "../../../slices/selectionSlice";

function CardInfo() {
  const cardData = useAppSelector(cards);
  const colors = ["bg-[--red]", "bg-[--hit]", "bg-[--green]", "bg-[--blue]"];

  return (
    <div className="flex flex-col p-4">
      {cardData.map((card, index) => {
        return (
          <div className="" key={index}>
            <h3 className="text-black font-bold m-4 text-xl text-center">
              {card.cardId}
            </h3>
            <div
              className={`px-6 h-12 ${colors[index]} font-bold text-lg outline outline-[--black] outline-4 justify-center items-center grid grid-cols-4 rounded`}
            >
              {/* <p>
                  Play:<span className="mx-2 font-black">{card.count}</span>
                </p> */}
              <p>
                Bet:<span className="mx-2 font-black">{card.bet}</span>
              </p>
              <p>
                Hit:<span className="mx-2 font-black">{card.hits}</span>
              </p>
              <p className="pr-12">
                Pay:<span className="mx-2 font-black">{card.pay}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardInfo;
