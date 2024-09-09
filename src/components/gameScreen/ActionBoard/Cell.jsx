export default function Cell({ number, theme, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${theme} text-[--black] w-10 h-10 m-0 p-0 text-3xl focus:outline-none hover:bg-[--red] hover:text-white`}
    >
      {number}
    </button>
  );
}
