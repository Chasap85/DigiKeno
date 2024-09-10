const ActionButton = ({ text, onClick }) => (
  <button
    className="rounded outline outline-[--black] outline-4 bg-[--yellow] py-2 px-4 text-sm text-black hover:text-white hover:bg-[--red] active:bg-sky-700"
    onClick={onClick}
  >
    {text}
  </button>
);

/**
 * Banner is where users engage in betting and dealing actions
 * @param {*} showAll - boolean for showing all card numbers or single card numbers
 * @param {*} setShowAll - setter for showAll state
 * @returns
 */
export default function Banner({ onEraseAll, onBet1, onBetMax, onPlay }) {
  return (
    <div className="flex justify-center items-center text-[--black]">
      <div className="m-4 space-x-4">
        <ActionButton text="Erase All" onClick={onEraseAll} />
        <ActionButton text="Bet 1" onClick={onBet1} />
      </div>
      <div className="m-4 space-x-4">
        <ActionButton text="Bet Max" onClick={onBetMax} />
        <ActionButton text="Play" onClick={onPlay} />
      </div>
    </div>
  );
}
