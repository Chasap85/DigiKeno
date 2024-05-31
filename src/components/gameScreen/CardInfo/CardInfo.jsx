function CardInfo() {
  return (
    <div className="flex flex-col">
      <h1 className="ml-24 text-left">
        DIGI-
        <br />
        KENO
      </h1>
      <div className="mt-26 grid gap-y-8 grid-rows-4">
        {/* A */}
        <div className="mt-6">
          <h3 className="ml-6">Card A</h3>
          <div className="ml-6 px-6 h-12 flex bg-[--red] justify-center items-center grid grid-cols-3 rounded-[2px]">
            <p>
              Play:<span>{5}</span>
            </p>
            <p>
              Bet:<span>{5}</span>
            </p>
            <p>
              Hit:<span>{5}</span>
            </p>
          </div>
        </div>
        {/* B */}
        <div className="mt-6">
          <h3 className="ml-6">Card B</h3>
          <div className="ml-6 px-6 h-12 flex bg-[--red] justify-center items-center grid grid-cols-3 rounded-[2px]">
            <p>
              Play:<span>{5}</span>
            </p>
            <p>
              Bet:<span>{5}</span>
            </p>
            <p>
              Hit:<span>{5}</span>
            </p>
          </div>
        </div>
        {/* C */}
        <div className="mt-6">
          <h3 className="ml-6">Card C</h3>
          <div className="ml-6 px-6 px-6 h-12 flex bg-[--red] justify-center items-center grid grid-cols-3 rounded-[2px]">
            <p>
              Play:<span>{5}</span>
            </p>
            <p>
              Bet:<span>{5}</span>
            </p>
            <p>
              Hit:<span>{5}</span>
            </p>
          </div>
        </div>
        {/* D */}
        <div className="mt-6">
          <h3 className="ml-6">Card D</h3>
          <div className="ml-6 px-6 h-12 flex bg-[--red] justify-center items-center grid grid-cols-3 rounded-[2px]">
            <p>
              Play:<span>{5}</span>
            </p>
            <p>
              Bet:<span>{5}</span>
            </p>
            <p>
              Hit:<span>{5}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
