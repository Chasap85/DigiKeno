import { useAppSelector } from "../../../store/reduxHooks";
import { cards } from "../../../store/slices/gameSlice";

function CardInfo() {
  const cardData = useAppSelector(cards);
  const colors = ["bg-[--red]", "bg-[--hit]", "bg-[--green]", "bg-[--blue]"];

  return (
    <div className="flex flex-col p-4 rounded outline outline-[--black] outline-4">
      {cardData.map((card, index) => {
        return (
          <div className="" key={index}>
            <h3 className="text-[--black] font-bold text-xl text-center">
              {card.cardId}
            </h3>
            <div
              className={`p-2 ${colors[index]} font-bold text-base outline outline-[--black] outline-4 justify-center items-center flex rounded`}
            >
              {/* <p>
                  Play:<span className="mx-2 font-black">{card.count}</span>
                </p> */}
              <p className="w-14">
                Bet:<span className="mx-2 font-black">{card.bet}</span>
              </p>
              <p className="w-14">
                Hit:<span className="mx-2 font-black">{card.hits}</span>
              </p>
              <p className="w-28">
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
