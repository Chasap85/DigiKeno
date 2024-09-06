export default function Cell({ value, number, theme, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${theme} w-14 h-14 m-0 p-0 text-[1.4em] text-[--grey-dark] focus:outline-none hover:bg-[--red] hover:text-white hover:text-[1.7em]`}
    >
      {number}
    </button>
  );
}
